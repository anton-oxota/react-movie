import css from "./MovieDetails.module.css";

import CheckIcon from "../../../assets/icons/circle-check-big.svg?react";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";
import ClockIcon from "../../../assets/icons/clock.svg?react";
import DolarIcon from "../../../assets/icons/dollar-sign.svg?react";
import StarIcon from "../../../assets/icons/star.svg?react";
import MonitorIcon from "../../../assets/icons/monitor-play.svg?react";
import FilmIcon from "../../../assets/icons/film.svg?react";

import type { MovieDetailsType } from "../../../utils/http";
import MovieInfoItem from "../MovieInfoItem/MovieInfoItem";
import { formatDate, formatMoney } from "../../../utils/formaters";

type MovieDetailsProps = Pick<
    MovieDetailsType,
    | "status"
    | "release_date"
    | "runtime"
    | "budget"
    | "revenue"
    | "vote_average"
    | "vote_count"
    | "adult"
    | "video"
>;

function MovieDetails({
    adult,
    budget,
    release_date,
    revenue,
    runtime,
    status,
    video,
    vote_average,
    vote_count,
}: MovieDetailsProps) {
    return (
        <div className={css.details}>
            <div className="container">
                <h2>Details</h2>

                <div className={css.detailsWrapper}>
                    <MovieInfoItem title="Status" icon={<CheckIcon />}>
                        <div className={css.text}>{status}</div>
                    </MovieInfoItem>

                    <MovieInfoItem title="Release Date" icon={<CalendarIcon />}>
                        <div className={css.text}>
                            {release_date
                                ? formatDate(release_date)
                                : "Unknown"}
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem title="Runtime" icon={<ClockIcon />}>
                        <div className={css.text}>{runtime} minutes</div>
                    </MovieInfoItem>

                    <MovieInfoItem title="Budget" icon={<DolarIcon />}>
                        <div className={css.text}>
                            {budget ? formatMoney(budget) : "Unknown"}
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem title="Revenu" icon={<DolarIcon />}>
                        <div className={css.text}>
                            {revenue ? formatMoney(revenue) : "Unknown"}
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem title="Vote Average" icon={<StarIcon />}>
                        <div className={css.vote}>
                            <StarIcon />
                            <div className={css.text}>
                                {vote_average.toFixed(1)}/10
                            </div>
                            <span>({vote_count} votes)</span>
                        </div>
                    </MovieInfoItem>

                    <MovieInfoItem title="Adult Content" icon={<FilmIcon />}>
                        <div className={css.text}>{adult ? "Yes" : "No"}</div>
                    </MovieInfoItem>

                    <MovieInfoItem title="Video" icon={<MonitorIcon />}>
                        <div className={css.text}>{video ? "Yes" : "No"}</div>
                    </MovieInfoItem>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
