import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { GenreType } from "../../utils/http";

type InitialState = {
    page: number;
    totalPages: number | null;
    genres: GenreType[];
};

const initialState: InitialState = {
    page: 1,
    totalPages: null,
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
            state.genres = [];
        },
    },
});

export default filterSlice.reducer;
export const { setPage, setTotalPages, toggleGenre, clearGenres } =
    filterSlice.actions;
