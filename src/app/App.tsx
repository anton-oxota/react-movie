import "./styles/index.css";

// React Router
import { RouterProvider } from "react-router";
import router from "./routes";

// TanStack Query
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../shared/api/config";

// Redux
import { Provider } from "react-redux";
import store from "./store";

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
