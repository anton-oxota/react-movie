import css from "./ResultsMovieListContainer.module.css";

import { getMovieByTitle } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { setPage } from "../../store/slices/resultsPageSlice";

import Loading from "../UI/Loading/Loading";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";

function ResultsMovieListContainer() {
    const dispatch = useAppDispatch();

    const { search } = useParams();
    const { page } = useAppSelector((state) => state.resultsPageState);

    const { data, isPending, error } = useQuery({
        queryKey: ["search", { search, page }],
        queryFn: () => getMovieByTitle(search || "", page),
    });

    // Pagination
    function handleChangePage(page: number) {
        dispatch(setPage(page));
    }

    if (isPending) {
        return <Loading />;
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
                            totalPages={data.total_pages}
                            activePage={page}
                            onChangePage={handleChangePage}
                        />
                    )}
                </div>
            </>
        );
    }
}

export default ResultsMovieListContainer;
