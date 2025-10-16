import css from "./MoviesFilters.module.css";

import FilterIcon from "../../assets/icons/sliders-horizontal.svg?react";
import SortIcon from "../../assets/icons/arrow-down-up.svg?react";

import { useState } from "react";
import MoviesSidebarFilters from "../MoviesSidebarFilters/MoviesSidebarFilters";
import FilterBadge from "../UI/FilterBadge/FilterBadge";
import { useAppDispatch, useAppSelector } from "../../store/store";
import type { GenreType } from "../../utils/http";
import {
    clearGenres,
    setPage,
    setSortBy,
    toggleGenre,
} from "../../store/slices/homePageSlice";
import Dropdown, { type Option } from "../UI/Dropdown/Dropdown";
import SearchForm from "../SearchForm/SearchForm";
import { useNavigate } from "react-router";

const sortOptions: Option[] = [
    {
        title: "Popularity",
        value: "popularity.desc",
    },
    {
        title: "Raiting ↓",
        value: "vote_average.asc",
    },
    {
        title: "Raiting ↑",
        value: "vote_average.desc",
    },
];

function MoviesFilters() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { genres, sortBy } = useAppSelector((state) => state.homePageState);

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

    function handleSortBy(option: Option) {
        dispatch(setSortBy(option));
    }

    // Searching
    function handleSearchFilm(search: string) {
        if (search.trim()) {
            dispatch(setPage(1));
            navigate(`results/${search}`);
        }
    }

    return (
        <>
            <div className={css.filters}>
                <div className={css.top}>
                    <SearchForm onSubmit={handleSearchFilm} />
                    <div className={css.actions}>
                        <button onClick={handleOpenFilters}>
                            <FilterIcon /> Filter
                        </button>

                        <Dropdown
                            title={
                                <>
                                    <SortIcon /> Sort By
                                </>
                            }
                            options={sortOptions}
                            activeOption={sortBy}
                            onChoose={handleSortBy}
                        />
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
