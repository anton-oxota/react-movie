import css from "./MoviesSidebarFilters.module.css";

import CloseIcon from "../../assets/icons/x.svg?react";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg?react";

import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { getGenres, type GenreType } from "../../utils/http";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleGenre } from "../../store/slices/homePageSlice";

type MoviesSidebarFiltersProps = {
    open: boolean;
    onClose: () => void;
};

function MoviesSidebarFilters({ open, onClose }: MoviesSidebarFiltersProps) {
    const dispatch = useAppDispatch();

    const { data } = useQuery({
        queryKey: ["genres"],
        queryFn: getGenres,
    });

    const genres = useAppSelector((state) => state.homePageState.genres);

    function handleToggleGenre(genre: GenreType) {
        dispatch(toggleGenre(genre));
    }

    return (
        <div className={`${css.filter} ${open ? css.open : ""}`}>
            <div onClick={onClose}></div>
            <aside className={css.aside}>
                <button onClick={onClose} className={css.closeButton}>
                    <CloseIcon />
                </button>
                <h3>Filters</h3>

                <FilterBlock title="Genre">
                    {data &&
                        data.map((genre) => (
                            <FilterCheckbox
                                key={genre.id}
                                label={genre.name}
                                onChange={() => handleToggleGenre(genre)}
                                checked={genres.some(({ id }) => {
                                    return id === genre.id;
                                })}
                            />
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
                <button className={css.filterBlockButton} onClick={toggleOpen}>
                    <ChevronDownIcon className={isOpen ? css.blockOpen : ""} />
                </button>
            </div>
            {isOpen ? (
                <div className={css.filterBlockBody}>{children}</div>
            ) : null}
        </div>
    );
}

type FilterCheckboxProps = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function FilterCheckbox({ label, ...inputProps }: FilterCheckboxProps) {
    return (
        <label className={css.filterCheckbox}>
            <input type="checkbox" {...inputProps} />
            {label}
        </label>
    );
}

export default MoviesSidebarFilters;
