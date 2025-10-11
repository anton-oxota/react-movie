import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    page: number;
    totalPages: number | null;
    genres: string[];
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
    },
});

export default filterSlice.reducer;
export const { setPage, setTotalPages } = filterSlice.actions;
