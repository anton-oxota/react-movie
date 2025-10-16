import css from "./MovieInformation.module.css";

import FilmIcon from "../../../assets/icons/film.svg?react";
import ScrollIcon from "../../../assets/icons/scroll-text.svg?react";
import FlagIcon from "../../../assets/icons/flag.svg?react";
import EarthIcon from "../../../assets/icons/earth.svg?react";

import type { GenreType, MovieDetailsType } from "../../../utils/http";

import MovieInfoItem from "../MovieInfoItem/MovieInfoItem";
import Badge from "../../UI/Badge/Badge";
import GenreBadge from "../../UI/GenreBadge/GenreBadge";

import { clearGenres, toggleGenre } from "../../../store/slices/homePageSlice";
import { useAppDispatch } from "../../../store/store";
import { useNavigate } from "react-router";

type MovieInformationProps = Pick<
    MovieDetailsType,
    | "genres"
    | "production_companies"
    | "production_countries"
    | "spoken_languages"
>;

function MovieInformation({
    genres,
    production_companies,
    production_countries,
    spoken_languages,
}: MovieInformationProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleSetGenre(genre: GenreType) {
        dispatch(clearGenres());
        dispatch(toggleGenre(genre));

        navigate("/");
    }

    return (
        <div className={css.information}>
            <div className="container">
                <h2>Categorical Information</h2>

                <div className={css.informationWrapper}>
                    <MovieInfoItem title="Genres" icon={<ScrollIcon />}>
                        <div className={css.block}>
                            {!genres.length && "Unknown"}

                            {genres.map((genre) => (
                                <GenreBadge
                                    key={genre.name}
                                    title={genre.name}
                                    onClick={() => handleSetGenre(genre)}
                                />
                            ))}
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem
                        title="Production Companies"
                        icon={<FilmIcon />}
                    >
                        <div className={css.block}>
                            {!production_companies.length && "Unknown"}

                            {production_companies.map(({ name }) => (
                                <Badge key={name} title={name} />
                            ))}
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem
                        title="Production Countries"
                        icon={<FlagIcon />}
                    >
                        <div className={css.block}>
                            {!production_countries.length && "Unknown"}

                            {production_countries.map(({ name }) => (
                                <Badge key={name} title={name} />
                            ))}
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem
                        title="Spoken Languages"
                        icon={<EarthIcon />}
                    >
                        <div className={css.block}>
                            {!spoken_languages.length && "Unknown"}

                            {spoken_languages.map(({ english_name }) => (
                                <Badge
                                    key={english_name}
                                    title={english_name}
                                />
                            ))}
                        </div>
                    </MovieInfoItem>
                </div>
            </div>
        </div>
    );
}

export default MovieInformation;
