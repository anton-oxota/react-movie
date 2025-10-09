import css from "./MoviePage.module.css";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMovieById } from "../../utils/http";
import Badge from "../../components/UI/Badge/Badge";

function MoviePage() {
    const { id } = useParams();

    const { data } = useQuery({
        queryKey: ["movie", { id }],
        queryFn: () => getMovieById(id!),
    });

    console.log(data);

    if (data) {
        return (
            <section>
                <div className={css.hero}>
                    <h1>{data.title}</h1>
                    <h3>{data.tagline}</h3>
                    <a href={data.homepage}>Visit Homepage</a>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                        alt=""
                    />
                </div>

                <div className={css.overview}>
                    <div className="container">
                        <div className={css.overviewWrapper}>
                            <div className={css.poster}>
                                <img
                                    className={css.posterImg}
                                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                    alt=""
                                />
                                <img
                                    className={css.posterBlur}
                                    src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2>Overview</h2>
                                <p>{data.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.details}>
                    <div className="container">
                        <h2>Details</h2>

                        <div className={css.detailsWrapper}>
                            <div className={css.infoItem}>
                                <h4>Status</h4>
                                <p className={css.text}>{data.status}</p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Release Date</h4>
                                <p className={css.text}>{data.release_date}</p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Runtime</h4>
                                <p className={css.text}>
                                    {data.runtime} minutes
                                </p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Budget</h4>
                                <p className={css.text}>{data.budget}</p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Revenue</h4>
                                <p className={css.text}>{data.revenue}</p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Vote Average</h4>
                                <p className={css.text}></p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Adult Content</h4>
                                <p className={css.text}></p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Video Available</h4>
                                <p className={css.text}></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.information}>
                    <div className="container">
                        <h2>Categorical Information</h2>

                        <div className={css.informationWrapper}>
                            <div className={css.infoItem}>
                                <h4>Genres</h4>
                                <div>
                                    {data.genres.map(({ id, name }) => (
                                        <Badge key={id} title={name} />
                                    ))}
                                </div>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Production Companies</h4>
                                <p></p>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Production Countries</h4>
                                <div>
                                    {data.production_countries.map(
                                        ({ name }) => (
                                            <Badge key={name} title={name} />
                                        )
                                    )}
                                </div>
                            </div>
                            <div className={css.infoItem}>
                                <h4>Spoken Languages</h4>
                                <div>
                                    {data.spoken_languages.map(
                                        ({ english_name }) => (
                                            <Badge
                                                key={english_name}
                                                title={english_name}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MoviePage;
