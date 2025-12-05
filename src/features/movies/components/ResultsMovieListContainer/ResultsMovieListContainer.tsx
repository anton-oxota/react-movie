import css from "./ResultsMovieListContainer.module.css";

import { getMovieByTitle } from "../../api/movies.api";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { setPage } from "../../model/resultsPageSlice";

import Loading from "../../../../shared/ui/Loading/Loading";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../../../../shared/components/Pagination/Pagination";

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
