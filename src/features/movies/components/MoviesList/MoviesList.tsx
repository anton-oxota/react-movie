import css from "./MoviesList.module.css";

import type { MovieType } from "../../api/movies.types";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

type MoviesListPorps = {
    moviesArray: MovieType[];
};

function MoviesList({ moviesArray }: MoviesListPorps) {
    return (
        <div className={css.list}>
            {!moviesArray.length && "Sorry, can not find any films"}
            {moviesArray.map((movie) => (
                <MoviesListCard key={movie.id} {...movie} />
            ))}
        </div>
    );
}

export default MoviesList;
