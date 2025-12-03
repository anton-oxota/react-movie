import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { GenreType } from "../../utils/http";
import type { Option } from "../../components/UI/Dropdown/Dropdown";
import { sortOptions } from "../../utils/filtersData";
import { getPageFromUrl, getSortByFromUrl } from "../../utils/url";

type InitialState = {
    page: number;
    totalPages: number | null;
    sortBy: Option | null;
    genres: GenreType[];
};

const initialPage = +getPageFromUrl() || 1;

const initialSortBy = sortOptions.find(
    (option) => option.value === getSortByFromUrl(),
) || {
    title: "Popularity",
    value: "popularity.desc",
};

const initialState: InitialState = {
    page: initialPage,
    totalPages: null,
    sortBy: initialSortBy,
    genres: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        toggleGenre: (state, action: PayloadAction<GenreType>) => {
            // Reset page
            state.page = 1;

            const isGenreExist = state.genres.some(
                ({ id }) => id === action.payload.id,
            );

            if (isGenreExist) {
                state.genres = state.genres.filter(
                    ({ id }) => id !== action.payload.id,
                );
            } else {
                state.genres.push(action.payload);
            }
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        clearGenres: (state) => {
            // Reset page
            state.page = 1;

            state.genres = [];
        },
        setSortBy: (state, action) => {
            // Reset page
            state.page = 1;

            state.sortBy = action.payload;
        },
    },
});

export default homePageSlice.reducer;
export const {
    setPage,
    setTotalPages,
    toggleGenre,
    setGenres,
    clearGenres,
    setSortBy,
} = homePageSlice.actions;
