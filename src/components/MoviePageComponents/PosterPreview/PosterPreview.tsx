import css from "./PosterPreview.module.css";

import type { MovieDetailsType } from "../../../utils/http";

type PosterPreviewProps = Pick<MovieDetailsType, "poster_path">;

function PosterPreview({ poster_path }: PosterPreviewProps) {
    return (
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
    );
}

export default PosterPreview;
