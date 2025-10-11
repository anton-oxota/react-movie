import css from "./MoviesList.module.css";

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Loading from "../UI/Loading/Loading";

import { getMovies } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../../store/store";
import MoviesPagination from "../MoviesPagination/MoviesPagination";

function MoviesList() {
    const { page } = useAppSelector((state) => state.filterState);

    // Fetch movies
    const { data, isPending } = useQuery({
        queryKey: ["movies", { page: page }],
        queryFn: () => getMovies(page),
    });

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
                    <MoviesPagination totalPages={500} activePage={page} />
                </div>
            </>
        );
    }
}

export default MoviesList;
