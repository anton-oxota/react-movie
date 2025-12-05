import css from "./MoviePage.module.css";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMovieById } from "../../api/movie.api";

import MovieHero from "../../components/MovieHero/MovieHero";
import MovieOverview from "../../components/MovieOverview/MovieOverview";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MovieInformation from "../../components/MovieInformation/MovieInformation";
import Loading from "../../../../shared/ui/Loading/Loading";

function MoviePage() {
    const { id } = useParams();

    const { data, isPending, error } = useQuery({
        queryKey: ["movie", { id }],
        queryFn: () => getMovieById(id!),
    });

    if (isPending) {
        return (
            <div className={css.message}>
                <Loading />
            </div>
        );
    }

    if (error) {
        return <div className={css.message}>{error.message}</div>;
    }

    if (data) {
        return (
            <section>
                <MovieHero
                    title={data.title}
                    backdrop_path={data.backdrop_path}
                    homepage={data.homepage}
                    tagline={data.tagline}
                />

                <MovieOverview
                    overview={data.overview}
                    poster_path={data.poster_path}
                />

                <MovieDetails {...data} />

                <MovieInformation {...data} />
            </section>
        );
    }
}

export default MoviePage;
