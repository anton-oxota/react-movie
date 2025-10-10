import css from "./MovieInformation.module.css";

import FilmIcon from "../../../assets/icons/film.svg?react";
import ScrollIcon from "../../../assets/icons/scroll-text.svg?react";
import FlagIcon from "../../../assets/icons/flag.svg?react";
import EarthIcon from "../../../assets/icons/earth.svg?react";
import MovieInfoItem from "../MovieInfoItem/MovieInfoItem";
import type { MovieDetailsType } from "../../../utils/http";
import Badge from "../../UI/Badge/Badge";

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
    return (
        <div className={css.information}>
            <div className="container">
                <h2>Categorical Information</h2>

                <div className={css.informationWrapper}>
                    <MovieInfoItem title="Genres" icon={<ScrollIcon />}>
                        <div className={css.block}>
                            {genres.map(({ name }) => (
                                <Badge key={name} title={name} />
                            ))}
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem
                        title="Production Companies"
                        icon={<FilmIcon />}
                    >
                        <div className={css.block}>
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
