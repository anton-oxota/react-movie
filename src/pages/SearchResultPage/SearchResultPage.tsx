import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMovieByTitle } from "../../utils/http";
import MoviesList from "../../components/MoviesList/MoviesList";

function SearchResultPage() {
    const { search } = useParams();

    const { data } = useQuery({
        queryKey: ["search", { search }],
        queryFn: () => getMovieByTitle(search || ""),
    });

    return (
        <div className="container">
            <h1>Results</h1>

            {data && <MoviesList moviesArray={data.results} />}
        </div>
    );
}

export default SearchResultPage;
