import css from "./Loading.module.css";

import LoadingIcon from "../../../assets/icons/loader-circle.svg?react";

function Loading() {
    return (
        <div className={css.loading}>
            <LoadingIcon /> Loading
        </div>
    );
}

export default Loading;
