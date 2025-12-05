import UserInfo from "../../ui/UserInfo/UserInfo";
import css from "./Header.module.css";

import { NavLink, useLocation, type NavLinkRenderProps } from "react-router";

function setActiveClass({ isActive }: NavLinkRenderProps) {
    return isActive ? css.active : undefined;
}

function Header() {
    const location = useLocation();

    const isResults = location.pathname.includes("results");
    const isMovie = location.pathname.includes("movie");

    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.headerWrapper}>
                    <nav className={css.nav}>
                        <ul>
                            <li>
                                <NavLink to="/" className={setActiveClass}>
                                    Home
                                </NavLink>
                            </li>
                            {isResults && (
                                <li>
                                    <a className={css.active}>Results</a>
                                </li>
                            )}
                            {isMovie && (
                                <li>
                                    <a className={css.active}>Movie</a>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <UserInfo
                        imgSrc="https://appsceai.com/Saf/images/user.png"
                        username="User Name"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
