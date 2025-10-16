import css from "./MoviesListCard.module.css";

import { queryClient, type GenreType, type MovieType } from "../../utils/http";
import GenreBadge from "../UI/GenreBadge/GenreBadge";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/store";
import { clearGenres, toggleGenre } from "../../store/slices/homePageSlice";

type MoviesListCardProps = Pick<
    MovieType,
    "title" | "overview" | "genre_ids" | "poster_path" | "id"
>;

function MoviesListCard({
    title,
    genre_ids,
    overview,
    poster_path,
    id,
}: MoviesListCardProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const genres = queryClient.getQueryData<GenreType[]>(["genres"]);

    function handleSetGenre(genre: GenreType) {
        dispatch(clearGenres());
        dispatch(toggleGenre(genre));
    }

    function handleGoMoviePage() {
        navigate(`/movie/${id}`);
    }

    return (
        <div onClick={handleGoMoviePage} className={css.card}>
            <h2>{title}</h2>
            <img
                src={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : "https://novagenetica.com.np/wp-content/themes/novagentica/assets/images/no-image.jpg"
                }
                alt={title}
            />
            <div className={css.info}>
                <p>{overview}</p>
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
                <div className={css.raiting}>STARS</div>
            </div>
        </div>
    );
}

export default MoviesListCard;
