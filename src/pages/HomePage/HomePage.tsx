import css from "./HomePage.module.css";

import MoviesFilters from "../../components/MoviesFilters/MoviesFilters";
import MoviesList from "../../components/MoviesList/MoviesList";

function HomePage() {
    return (
        <>
            <div className="container">
                <h1>Home Page</h1>

                <div className={css.moviesFilters}>
                    <MoviesFilters />
                </div>

                <div className={css.moviesList}>
                    <MoviesList />
                </div>
            </div>
        </>
    );
}

export default HomePage;
