import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { GenreType } from "../../utils/http";
import type { Option } from "../../components/UI/Dropdown/Dropdown";

type InitialState = {
    page: number;
    totalPages: number | null;
    sortBy: Option | null;
    genres: GenreType[];
};

const initialState: InitialState = {
    page: 1,
    totalPages: null,
    sortBy: {
        title: "Popularity",
        value: "popularity.desc",
    },
    genres: [],
};

const filterSlice = createSlice({
    name: "filter",
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
                ({ id }) => id === action.payload.id
            );

            if (isGenreExist) {
                state.genres = state.genres.filter(
                    ({ id }) => id !== action.payload.id
                );
            } else {
                state.genres.push(action.payload);
            }
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

export default filterSlice.reducer;
export const { setPage, setTotalPages, toggleGenre, clearGenres, setSortBy } =
    filterSlice.actions;
