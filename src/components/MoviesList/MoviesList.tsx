import type { MovieType } from "../../utils/http";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from "./MoviesList.module.css";

type MoviesListPorps = {
    moviesArray: MovieType[];
};

function MoviesList({ moviesArray }: MoviesListPorps) {
    return (
        <div className={css.list}>
            {moviesArray.map((movie) => (
                <MoviesListCard key={movie.id} {...movie} />
            ))}
        </div>
    );
}

export default MoviesList;
