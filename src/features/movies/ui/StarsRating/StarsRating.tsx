import css from "./StarsRating.module.css";

import StarIcon from "../../../../assets/icons/stars/star.svg?react";
import StarFilledIcon from "../../../../assets/icons/stars/star-filled.svg?react";
import StarHalfIcon from "../../../../assets/icons/stars/star-half.svg?react";

import type { MovieType } from "../../api/movies.types";

type StarsRatingProps = Required<Pick<MovieType, "vote_average">>;

function StarsRating({ vote_average }: StarsRatingProps) {
    const stars = [];

    const [int, float] = vote_average.toFixed(1).toString().split(".");

    for (let i = 1; i <= 10; i++) {
        stars.push(
            i <= +int ? (
                <StarFilledIcon fill="white" />
            ) : (
                <StarIcon fill="white" />
            ),
        );
    }

    if (+float > 5) {
        stars[+int] = <StarHalfIcon fill="white" />;
    }

    return <div className={css.raiting}>{...stars}</div>;
}

export default StarsRating;
