import css from "./HomeMovieListContainer.module.css";

import { getMovies } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { setPage, setTotalPages } from "../../store/slices/homePageSlice";

import { useEffect } from "react";

import Loading from "../UI/Loading/Loading";
import Pagination from "../Pagination/Pagination";
import MoviesList from "../MoviesList/MoviesList";

function HomeMovieListContainer() {
    const dispatch = useAppDispatch();

    const { page, genres, totalPages, sortBy } = useAppSelector(
        (state) => state.homePageState
    );

    // Fetch movies
    const { data, isPending, error } = useQuery({
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

    if (error) {
        return <div>{error.message}</div>;
    }

    if (data) {
        return (
            <>
                <MoviesList moviesArray={data.results} />

                <div className={css.pagination}>
                    {!!data.results.length && (
                        <Pagination
                            totalPages={totalPages || 500}
                            activePage={page}
                            onChangePage={handleChangePage}
                        />
                    )}
                </div>
            </>
        );
    }
}

export default HomeMovieListContainer;
