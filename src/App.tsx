import "./App.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router";

// TanStack Query
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
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
