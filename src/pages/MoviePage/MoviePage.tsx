import css from "./MoviePage.module.css";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMovieById } from "../../utils/http";

import Loading from "../../components/UI/Loading/Loading";
import MovieOverview from "../../components/MoviePageComponents/MovieOverview/MovieOverview";
import MovieHero from "../../components/MoviePageComponents/MovieHero/MovieHero";
import MovieDetails from "../../components/MoviePageComponents/MovieDetails/MovieDetails";
import MovieInformation from "../../components/MoviePageComponents/MovieInformation/MovieInformation";

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
