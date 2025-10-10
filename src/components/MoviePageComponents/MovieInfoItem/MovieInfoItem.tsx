import css from "./MovieInfoItem.module.css";

type MovieInfoItemProps = {
    children: React.ReactNode;
    title: string;
    icon?: React.ReactNode;
};

function MovieInfoItem({ children, title, icon }: MovieInfoItemProps) {
    return (
        <div className={css.infoItem}>
            <h4>
                {icon}
                {title}
            </h4>
            {children}
        </div>
    );
}

export default MovieInfoItem;
