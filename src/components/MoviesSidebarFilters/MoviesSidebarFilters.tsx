import { useQuery } from "@tanstack/react-query";
import css from "./MoviesSidebarFilters.module.css";

import { useState } from "react";
import { getGenres } from "../../utils/http";

type MoviesSidebarFiltersProps = {
    open: boolean;
    onClose: () => void;
};

function MoviesSidebarFilters({ open, onClose }: MoviesSidebarFiltersProps) {
    const { data } = useQuery({
        queryKey: ["genres"],
        queryFn: getGenres,
    });

    return (
        <div className={`${css.filter} ${open ? css.open : ""}`}>
            <div onClick={onClose}></div>
            <aside className={css.aside}>
                <button onClick={onClose} className={css.closeButton}>
                    Close
                </button>
                <h3>Filters</h3>

                <FilterBlock title="Genre">
                    {data &&
                        data.map(({ name, id }) => (
                            <FilterCheckbox key={id} label={name} />
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
