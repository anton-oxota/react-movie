import { createBrowserRouter } from "react-router";

import RootLayout from "../shared/layouts/RootLayout";
import HomePage from "../features/movies/pages/HomePage/HomePage";
import MoviePage from "../features/movie-details/pages/MoviePage/MoviePage";
import SearchResultPage from "../features/movies/pages/SearchResultPage/SearchResultPage";
import NotFoundPage from "../shared/pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "movie/:id", element: <MoviePage /> },
            { path: "results/:search", element: <SearchResultPage /> },
        ],
    },

    { path: "*", element: <NotFoundPage /> },
]);

export default router;
