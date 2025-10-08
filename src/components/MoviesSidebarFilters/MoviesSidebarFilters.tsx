import css from "./MoviesSidebarFilters.module.css";

import { useState } from "react";

const DUMMY_GENRES = ["Action", "Si-Fi", "Horror", "Advanture", "Mystery"];

type MoviesSidebarFiltersProps = {
    open: boolean;
    onClose: () => void;
};

function MoviesSidebarFilters({ open, onClose }: MoviesSidebarFiltersProps) {
    return (
        <div className={`${css.filter} ${open ? css.open : ""}`}>
            <div onClick={onClose}></div>
            <aside className={css.aside}>
                <button onClick={onClose} className={css.closeButton}>
                    Close
                </button>
                <h3>Filters</h3>

                <FilterBlock title="Genre">
                    {DUMMY_GENRES.map((genre) => (
                        <FilterCheckbox key={genre} label={genre} />
                    ))}
                </FilterBlock>

                <FilterBlock title="Raiting">
                    <input type="range" />
                </FilterBlock>
            </aside>
        </div>
    );
}

type FilterBlockProps = {
    title: string;
    open?: boolean;
    children: React.ReactNode;
};

function FilterBlock({ open = true, title, children }: FilterBlockProps) {
    const [isOpen, setIsOpen] = useState(open);

    function toggleOpen() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className={css.filterBlock}>
            <div className={css.filterBlockHeader}>
                <h4>{title}</h4>
                <button onClick={toggleOpen}>Open</button>
            </div>
            {isOpen ? (
                <div className={css.filterBlockBody}>{children}</div>
            ) : null}
        </div>
    );
}

type FilterCheckboxProps = {
    label: string;
};

function FilterCheckbox({ label }: FilterCheckboxProps) {
    return (
        <label className={css.filterCheckbox}>
            <input type="checkbox" />
            {label}
        </label>
    );
}

export default MoviesSidebarFilters;
