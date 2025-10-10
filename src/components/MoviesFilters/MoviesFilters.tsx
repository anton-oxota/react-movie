import css from "./MoviesFilters.module.css";

import SearchIcon from "../../assets/icons/search.svg?react";
import FilterIcon from "../../assets/icons/sliders-horizontal.svg?react";
import SortIcon from "../../assets/icons/arrow-down-up.svg?react";

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
                    <button type="submit">
                        <SearchIcon />
                        Search
                    </button>
                </form>
                <div className={css.actions}>
                    <button onClick={handleOpenFilters}>
                        <FilterIcon /> Filter
                    </button>
                    <button>
                        <SortIcon /> Sort By
                    </button>
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
