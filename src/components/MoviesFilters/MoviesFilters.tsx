import css from "./MoviesFilters.module.css";
import { useState } from "react";
import MoviesSidebarFilters from "../MoviesSidebarFilters/MoviesSidebarFilters";

function MoviesFilters() {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    function handleOpenFilters() {
        setIsFiltersOpen(true);
    }

    function handleCloseFilters() {
        setIsFiltersOpen(false);
    }

    return (
        <>
            <div className={css.filters}>
                <form className={css.search} action="">
                    <input type="text" placeholder="Search movies..." />
                    <button type="submit">Search</button>
                </form>
                <div className={css.actions}>
                    <button onClick={handleOpenFilters}>Filter</button>
                    <button>Sort By</button>
                </div>
            </div>

            <MoviesSidebarFilters
                open={isFiltersOpen}
                onClose={handleCloseFilters}
            />
        </>
    );
}

export default MoviesFilters;
