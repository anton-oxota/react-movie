import css from "./MovieOverview.module.css";

import type { MovieDetailsType } from "../../../movies/api/movies.types";
import PosterPreview from "../PosterPreview/PosterPreview";

type MovieOverviewProps = Pick<MovieDetailsType, "overview" | "poster_path">;

function MovieOverview({ overview, poster_path }: MovieOverviewProps) {
    return (
        <div className={css.overview}>
            <div className="container">
                <div className={css.overviewWrapper}>
                    <PosterPreview poster_path={poster_path} />
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
