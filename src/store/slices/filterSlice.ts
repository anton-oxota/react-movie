import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../store";

type InitialState = {
    page: number;
    genres: string[];
};

const initialState: InitialState = {
    page: 1,
    genres: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { setPage } = filterSlice.actions;

export const useFilterSelector = () =>
    useAppSelector((state) => state.filterState);
