import GenreBadge from "../UI/GenreBadge/GenreBadge";
import css from "./MoviesListCard.module.css";

function MoviesListCard() {
    return (
        <div className={css.card}>
            <h2>Interstellar</h2>
            <img src="#" alt="" />
            <div className={css.info}>
                <p>
                    A team of explorers travel through a wormhole in space in an
                    attempt to ensure humanity's survival. Exploring themes of
                    love, time, and human endurance. A team of explorers travel
                    through a wormhole in space in an attempt to ensure
                    humanity's survival. Exploring themes of love, time, and
                    human endurance.
                </p>
                <div className={css.genres}>
                    Genres:
                    <GenreBadge />
                    <GenreBadge />
                    <GenreBadge />
                    <GenreBadge />
                </div>
                <div className={css.raiting}>STARS</div>
            </div>
        </div>
    );
}

export default MoviesListCard;
