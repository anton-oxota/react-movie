import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";

import homePageSliceReducer from "../features/movies/model/homePageSlice";
import resultsPageSliceReducer from "../features/movies/model/resultsPageSlice";

const store = configureStore({
    reducer: {
        homePageState: homePageSliceReducer,
        resultsPageState: resultsPageSliceReducer,
    },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
