import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";

import homePageSliceReducer from "./slices/homePageSlice";
import resultsPageSliceReducer from "./slices/resultsPageSlice";

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
