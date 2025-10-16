import css from "./SearchResultPage.module.css";

import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { getMovieByTitle } from "../../utils/http";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Pagination from "../../components/Pagination/Pagination";
import { setPage } from "../../store/slices/resultsPageSlice";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loading from "../../components/UI/Loading/Loading";

function SearchResultPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { search } = useParams();
    const { page } = useAppSelector((state) => state.resultsPageState);

    const { data, isFetching } = useQuery({
        queryKey: ["search", { search, page }],
        queryFn: () => getMovieByTitle(search || "", page),
    });

    // Pagination
    function handleChangePage(page: number) {
        dispatch(setPage(page));
    }

    // Searching
    function handleSearchFilm(search: string) {
        if (search.trim()) {
            dispatch(setPage(1));
            navigate(`/results/${search}`);
        }
    }

    return (
        <div className="container">
            <h1>Results</h1>

            <div className={css.searchBlock}>
                <SearchForm onSubmit={handleSearchFilm} />
            </div>

            {isFetching && <Loading />}

            {data && (
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
            )}
        </div>
    );
}

export default SearchResultPage;
