import css from "./MoviesListCard.module.css";

import { queryClient, type GenreType, type MovieType } from "../../utils/http";
import GenreBadge from "../UI/GenreBadge/GenreBadge";
import { Link } from "react-router";

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
    const genres = queryClient.getQueryData<GenreType[]>(["genres"]);
    console.log(genres);

    return (
        <Link to={`movie/${id}`} className={css.card}>
            <h2>{title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
            />
            <div className={css.info}>
                <p>{overview}</p>
                <div className={css.genres}>
                    Genres:
                    {genres &&
                        genre_ids.map((id) => {
                            const title = genres.find((g) => g.id === id)!.name;
                            return <GenreBadge key={id} title={title} />;
                        })}
                </div>
                <div className={css.raiting}>STARS</div>
            </div>
        </Link>
    );
}

export default MoviesListCard;
