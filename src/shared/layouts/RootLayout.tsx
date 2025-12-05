import { Outlet } from "react-router";
import Header from "../../shared/components/Header/Header";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RootLayout;
