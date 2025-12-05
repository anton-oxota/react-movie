import css from "./MoviesListCard.module.css";

import { queryClient } from "../../../../shared/api/config";
import type { GenreType, MovieType } from "../../api/movies.types";

import GenreBadge from "../../../../shared/ui/GenreBadge/GenreBadge";
import { Link, useNavigate } from "react-router";
import { useAppDispatch } from "../../../../app/store";
import { clearGenres, toggleGenre } from "../../model/homePageSlice";
import StarsRating from "../../ui/StarsRating/StarsRating";

type MoviesListCardProps = Pick<
    MovieType,
    "title" | "overview" | "genre_ids" | "poster_path" | "id" | "vote_average"
>;

function MoviesListCard({
    title,
    genre_ids,
    overview,
    poster_path,
    id,
    vote_average,
}: MoviesListCardProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const genres = queryClient.getQueryData<GenreType[]>(["genres"]);

    function handleSetGenre(genre: GenreType) {
        navigate("/");
        dispatch(clearGenres());
        dispatch(toggleGenre(genre));
    }

    return (
        <div className={css.card}>
            <h2>{title}</h2>
            <Link to={`/movie/${id}`}>
                <img
                    src={
                        poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : "https://novagenetica.com.np/wp-content/themes/novagentica/assets/images/no-image.jpg"
                    }
                    alt={title}
                />
            </Link>

            <div className={css.info}>
                <p>
                    {overview ? overview : "This movie dont have description"}
                </p>
                <div className={css.genres}>
                    Genres:
                    {genres &&
                        genre_ids &&
                        genre_ids.map((id) => {
                            const genre = genres.find((g) => g.id === id)!;
                            return (
                                <GenreBadge
                                    key={id}
                                    title={genre.name}
                                    onClick={(event) => {
                                        event?.stopPropagation();
                                        handleSetGenre(genre);
                                    }}
                                />
                            );
                        })}
                </div>
                {!!vote_average && <StarsRating vote_average={vote_average} />}
            </div>
        </div>
    );
}

export default MoviesListCard;
