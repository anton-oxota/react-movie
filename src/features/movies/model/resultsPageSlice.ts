import { createSlice } from "@reduxjs/toolkit";
import { getPageFromUrl } from "../utils/url";

type InitialState = {
    page: number;
};

const initialPage = +getPageFromUrl() || 1;

const initialState: InitialState = {
    page: initialPage,
};

const resultsPageSlice = createSlice({
    name: "resultsPage",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export default resultsPageSlice.reducer;
export const { setPage } = resultsPageSlice.actions;
