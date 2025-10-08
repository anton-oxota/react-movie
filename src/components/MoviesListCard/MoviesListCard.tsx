import css from "./MoviesListCard.module.css";

import { queryClient, type GenreType, type MovieType } from "../../utils/http";
import GenreBadge from "../UI/GenreBadge/GenreBadge";

type MoviesListCardProps = Pick<
    MovieType,
    "original_title" | "overview" | "genre_ids" | "poster_path"
>;

function MoviesListCard({
    original_title,
    genre_ids,
    overview,
    poster_path,
}: MoviesListCardProps) {
    const genres = queryClient.getQueryData<GenreType[]>(["genres"]);
    console.log(genres);

    return (
        <div className={css.card}>
            <h2>{original_title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
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
        </div>
    );
}

export default MoviesListCard;
