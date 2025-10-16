import css from "./NotFoundPage.module.css";

import { Link } from "react-router";

function NotFoundPage() {
    return (
        <section>
            <div className="container">
                <div className={css.notFoundPageWrapper}>
                    <h1>
                        <span>404</span> Sorry, we can not found this page
                    </h1>
                    <Link to="/">Go Home</Link>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
