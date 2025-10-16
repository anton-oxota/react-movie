import css from "./SearchForm.module.css";

import SearchIcon from "../../assets/icons/search.svg?react";

type SearchForm = {
    onSubmit: (search: string) => void;
};

function SearchForm({ onSubmit }: SearchForm) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const inputValue = form.search.value;
        onSubmit(inputValue);
    }

    return (
        <form className={css.search} action="" onSubmit={handleSubmit}>
            <input name="search" type="text" placeholder="Search movies..." />
            <button type="submit">
                <SearchIcon />
                Search
            </button>
        </form>
    );
}

export default SearchForm;
