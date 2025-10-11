import css from "./FilterBadge.module.css";

import CloseIcon from "../../../assets/icons/x.svg?react";

type FilterBadgeProps = {
    title: string;
    onClick?: () => void;
};

function FilterBadge({ title, onClick }: FilterBadgeProps) {
    return (
        <div className={css.filterBadge}>
            {title}
            <button onClick={onClick}>
                <CloseIcon />
            </button>
        </div>
    );
}

export default FilterBadge;
