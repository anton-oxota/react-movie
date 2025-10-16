import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";
import MoviePage from "./pages/MoviePage/MoviePage";
import { Provider } from "react-redux";
import store from "./store/store";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    { path: "", element: <HomePage /> },
    { path: "movie/:id", element: <MoviePage /> },
    { path: "results/:search", element: <SearchResultPage /> },
    { path: "*", element: <NotFoundPage /> },
]);

function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
