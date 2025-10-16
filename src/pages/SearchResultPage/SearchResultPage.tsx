import css from "./SearchResultPage.module.css";

import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/store";
import { setPage } from "../../store/slices/resultsPageSlice";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsMovieListContainer from "../../components/ResultsMovieListContainer/ResultsMovieListContainer";

function SearchResultPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Searching
    function handleSearchFilm(search: string) {
        if (search.trim()) {
            dispatch(setPage(1));
            navigate(`/results/${search}`);
        }
    }

    return (
        <section className={css.resultsPage}>
            <div className="container">
                <h1>Results</h1>

                <div className={css.searchBlock}>
                    <SearchForm onSubmit={handleSearchFilm} />
                </div>

                <div className={css.resultsList}>
                    <ResultsMovieListContainer />
                </div>
            </div>
        </section>
    );
}

export default SearchResultPage;
