import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http";

const router = createBrowserRouter([{ path: "", element: <HomePage /> }]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
