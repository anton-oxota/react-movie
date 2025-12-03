import type { Option } from "../components/UI/Dropdown/Dropdown";

export const sortOptions: Option[] = [
    {
        title: "Popularity",
        value: "popularity.desc",
    },
    {
        title: "Raiting ↓",
        value: "vote_average.asc",
    },
    {
        title: "Raiting ↑",
        value: "vote_average.desc",
    },
];
