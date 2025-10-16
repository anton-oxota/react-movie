import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    page: number;
};

const initialState: InitialState = {
    page: 1,
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
