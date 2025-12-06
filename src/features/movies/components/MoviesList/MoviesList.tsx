import css from "./MoviesList.module.css";

import type { MovieType } from "../../api/movies.types";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

type MoviesListPorps = {
    moviesArray: MovieType[];
    ref: React.RefObject<HTMLDivElement | null>;
};

function MoviesList({ moviesArray, ref }: MoviesListPorps) {
    return (
        <div className={css.list} ref={ref}>
            {!moviesArray.length && "Sorry, can not find any films"}
            {moviesArray.map((movie) => (
                <MoviesListCard key={movie.id} {...movie} />
            ))}
        </div>
    );
}

export default MoviesList;
