import css from "./SearchResultPage.module.css";

import { useNavigate, useParams, useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { setPage } from "../../model/resultsPageSlice";
import SearchForm from "../../ui/SearchForm/SearchForm";
import ResultsMovieListContainer from "../../components/ResultsMovieListContainer/ResultsMovieListContainer";
import { useEffect } from "react";

function SearchResultPage() {
    const { search } = useParams();

    const setSearchParams = useSearchParams()[1];
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { page } = useAppSelector((state) => state.resultsPageState);

    // Searching
    function handleSearchFilm(search: string) {
        if (search.trim()) {
            dispatch(setPage(1));
            navigate(`/results/${search}`);
        }
    }

    useEffect(() => {
        const params: { page?: string } = {};
        if (page !== 1) params.page = page.toString();
        setSearchParams(params, { replace: true });
    }, [page, setSearchParams]);

    return (
        <section className={css.resultsPage}>
            <div className="container">
                <h1>Results</h1>

                <div className={css.searchBlock}>
                    <SearchForm
                        onSubmit={handleSearchFilm}
                        defaulValue={search}
                    />
                </div>

                <div className={css.resultsList}>
                    <ResultsMovieListContainer />
                </div>
            </div>
        </section>
    );
}

export default SearchResultPage;
