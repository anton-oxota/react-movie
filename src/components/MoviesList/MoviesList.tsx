import css from "./MoviesList.module.css";

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Loading from "../UI/Loading/Loading";

import { getMovies } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Pagination from "../Pagination/Pagination";
import { setPage, setTotalPages } from "../../store/slices/filterSlice";
import { useEffect } from "react";

function MoviesList() {
    const dispatch = useAppDispatch();

    const { page, genres, totalPages, sortBy } = useAppSelector(
        (state) => state.filterState
    );

    // Fetch movies
    const { data, isPending } = useQuery({
        queryKey: ["movies", { page, genres, sortBy: sortBy?.value }],
        queryFn: () =>
            getMovies({
                page,
                genres: genres.map(({ id }) => id),
                sortBy: sortBy?.value,
            }),
    });

    useEffect(() => {
        if (data?.total_pages) {
            dispatch(
                setTotalPages(data.total_pages > 500 ? 500 : data.total_pages)
            );
        }
    }, [dispatch, data?.total_pages]);

    function handleChangePage(page: number) {
        dispatch(setPage(page));
    }

    if (isPending) {
        return (
            <div className={css.loaging}>
                <Loading />
            </div>
        );
    }

    if (data) {
        return (
            <>
                <div className={css.list}>
                    {data.results.map((movieData) => (
                        <MoviesListCard key={movieData.id} {...movieData} />
                    ))}
                </div>

                <div className={css.pagination}>
                    <Pagination
                        totalPages={totalPages || 500}
                        activePage={page}
                        onChangePage={handleChangePage}
                    />
                </div>
            </>
        );
    }
}

export default MoviesList;
