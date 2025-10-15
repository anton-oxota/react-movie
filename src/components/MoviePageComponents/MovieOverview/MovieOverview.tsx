import type { MovieDetailsType } from "../../../utils/http";
import css from "./MovieOverview.module.css";

type MovieOverviewProps = Pick<MovieDetailsType, "overview" | "poster_path">;

function MovieOverview({ overview, poster_path }: MovieOverviewProps) {
    return (
        <div className={css.overview}>
            <div className="container">
                <div className={css.overviewWrapper}>
                    <div className={css.poster}>
                        <img
                            className={css.posterImg}
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt=""
                        />
                        <img
                            className={css.posterBlur}
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                            alt=""
                        />
                    </div>
                    <div>
                        <h2>Overview</h2>
                        <p>
                            {overview
                                ? overview
                                : "Sorry, this movie has not overview"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieOverview;
