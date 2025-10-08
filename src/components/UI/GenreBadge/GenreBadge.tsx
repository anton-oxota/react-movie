import css from "./GenreBadge.module.css";

type GenreBadgeProps = {
    title: string;
};

function GenreBadge({ title }: GenreBadgeProps) {
    return <div className={css.badge}>{title}</div>;
}

export default GenreBadge;
