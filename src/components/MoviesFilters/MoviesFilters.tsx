import css from "./MoviesFilters.module.css";

import SearchIcon from "../../assets/icons/search.svg?react";
import FilterIcon from "../../assets/icons/sliders-horizontal.svg?react";
import SortIcon from "../../assets/icons/arrow-down-up.svg?react";

import { useState } from "react";
import MoviesSidebarFilters from "../MoviesSidebarFilters/MoviesSidebarFilters";
import FilterBadge from "../UI/FilterBadge/FilterBadge";
import { useAppDispatch, useAppSelector } from "../../store/store";
import type { GenreType } from "../../utils/http";
import { clearGenres, toggleGenre } from "../../store/slices/filterSlice";

function MoviesFilters() {
    const dispatch = useAppDispatch();
    const genres = useAppSelector((state) => state.filterState.genres);

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    function handleOpenFilters() {
        setIsFiltersOpen(true);
    }

    function handleCloseFilters() {
        setIsFiltersOpen(false);
    }

    function handleToggleGenre(genre: GenreType) {
        dispatch(toggleGenre(genre));
    }

    function handleClearGenres() {
        dispatch(clearGenres());
    }

    return (
        <>
            <div className={css.filters}>
                <div className={css.top}>
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
                {!!genres.length && (
                    <div className={css.activeFilters}>
                        {genres.map((genre) => (
                            <FilterBadge
                                key={genre.id}
                                title={genre.name}
                                onClick={() => handleToggleGenre(genre)}
                            />
                        ))}
                        <FilterBadge
                            key="Clear All"
                            title="Clear All"
                            onClick={handleClearGenres}
                        />
                    </div>
                )}
            </div>

            <MoviesSidebarFilters
                open={isFiltersOpen}
                onClose={handleCloseFilters}
            />
        </>
    );
}

export default MoviesFilters;
