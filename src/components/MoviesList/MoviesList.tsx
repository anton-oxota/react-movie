import { useQuery } from "@tanstack/react-query";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from "./MoviesList.module.css";
import { getMovies } from "../../utils/http";

function MoviesList() {
    const { data } = useQuery({
        queryKey: ["movies"],
        queryFn: getMovies,
    });

    return (
        <div className={css.list}>
            {data &&
                data.map((movieData) => (
                    <MoviesListCard key={movieData.id} {...movieData} />
                ))}
        </div>
    );
}

export default MoviesList;
