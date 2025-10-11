import css from "./Pagination.module.css";

import RightArrowIcon from "../../assets/icons/chevron-right.svg?react";
import LeftArrowIcon from "../../assets/icons/chevron-left.svg?react";

function createButtons(totalPages: number, activePage: number) {
    const pageNumbersArray = [];

    if (activePage >= 5 && activePage <= totalPages - 5) {
        pageNumbersArray.push(1, "...");
        for (let i = activePage - 2; i <= activePage + 2; i++) {
            pageNumbersArray.push(i);
        }
        pageNumbersArray.push("...", totalPages);
    }

    if (activePage < 5) {
        pageNumbersArray.push(1, 2, 3, 4, 5, "...", totalPages);
    }

    if (activePage > totalPages - 5) {
        pageNumbersArray.push(
            1,
            "...",
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages
        );
    }

    return pageNumbersArray;
}

type MoviesPaginationType = {
    totalPages: number;
    activePage: number;
    onChangePage: (page: number) => void;
};

function MoviesPagination({
    totalPages,
    activePage,
    onChangePage,
}: MoviesPaginationType) {
    function handleChangePage(page: number) {
        if (page === 0 || page === totalPages + 1) return;
        onChangePage(page);
    }

    return (
        <div className={css.pagination}>
            <button
                className={css.sideButton}
                onClick={() => handleChangePage(activePage - 1)}
            >
                <LeftArrowIcon />
                Previous
            </button>
            {createButtons(totalPages, activePage).map((pageNumber, i) => {
                if (typeof pageNumber === "string") {
                    return <div key={pageNumber + i}>{pageNumber}</div>;
                }
                return (
                    <PaginationMainButton
                        key={pageNumber}
                        isActive={activePage === pageNumber}
                        page={pageNumber}
                        onClick={() => handleChangePage(pageNumber)}
                    />
                );
            })}
            <button
                className={css.sideButton}
                onClick={() => handleChangePage(activePage + 1)}
            >
                Next
                <RightArrowIcon />
            </button>
        </div>
    );
}

type PaginationMainButtonProps = {
    isActive?: boolean;
    page: number;
} & React.HTMLAttributes<HTMLButtonElement>;

function PaginationMainButton({
    isActive,
    page,
    ...buttonProps
}: PaginationMainButtonProps) {
    let classes = css.mainButton;

    if (isActive) {
        classes += ` ${css.active}`;
    }

    return (
        <button className={classes} {...buttonProps}>
            {page}
        </button>
    );
}

export default MoviesPagination;
