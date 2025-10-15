import type { MovieDetailsType } from "../../../utils/http";
import css from "./MovieHero.module.css";

type MovieHeroProps = Pick<
    MovieDetailsType,
    "title" | "tagline" | "homepage" | "backdrop_path"
>;

function MovieHero({
    title,
    tagline,
    homepage,
    backdrop_path,
}: MovieHeroProps) {
    return (
        <div className={css.hero}>
            <h1>{title}</h1>
            <h3>{tagline}</h3>
            {homepage && <a href={homepage}>Visit Homepage</a>}
            {backdrop_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt=""
                />
            )}
        </div>
    );
}

export default MovieHero;
