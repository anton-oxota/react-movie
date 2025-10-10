import css from "./MoviesList.module.css";

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import Loading from "../UI/Loading/Loading";

import { getMovies } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

function MoviesList() {
    const { data, isPending } = useQuery({
        queryKey: ["movies"],
        queryFn: getMovies,
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
            <div className={css.list}>
                {data.map((movieData) => (
                    <MoviesListCard key={movieData.id} {...movieData} />
                ))}
            </div>
        );
    }
}

export default MoviesList;
