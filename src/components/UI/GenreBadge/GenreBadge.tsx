import css from "./GenreBadge.module.css";

type GenreBadgeProps = {
    title: string;
    onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function GenreBadge({ title, onClick }: GenreBadgeProps) {
    return (
        <div className={css.badge} onClick={onClick}>
            {title}
        </div>
    );
}

export default GenreBadge;
