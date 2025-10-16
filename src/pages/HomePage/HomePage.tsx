import css from "./HomePage.module.css";

import MoviesFilters from "../../components/MoviesFilters/MoviesFilters";
import HomeMovieListContainer from "../../components/HomeMovieListContainer/HomeMovieListContainer";

function HomePage() {
    return (
        <div className="container">
            <h1>Home Page</h1>

            <div className={css.moviesFilters}>
                <MoviesFilters />
            </div>

            <div className={css.moviesList}>
                <HomeMovieListContainer />
            </div>
        </div>
    );
}

export default HomePage;
