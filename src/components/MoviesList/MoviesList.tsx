import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from "./MoviesList.module.css";

function MoviesList() {
    return (
        <div className={css.list}>
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
            <MoviesListCard />
        </div>
    );
}

export default MoviesList;
