import css from "./Badge.module.css";

type BadgeProps = {
    title: string;
};

function Badge({ title }: BadgeProps) {
    return <div className={css.badge}>{title}</div>;
}

export default Badge;
