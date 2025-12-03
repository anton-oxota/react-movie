import css from "./HomePage.module.css";

import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import MoviesFilters from "../../components/MoviesFilters/MoviesFilters";
import HomeMovieListContainer from "../../components/HomeMovieListContainer/HomeMovieListContainer";
import type { Option } from "../../components/UI/Dropdown/Dropdown";

import { setGenres } from "../../store/slices/homePageSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import { getGenres, type GenreType } from "../../utils/http";
import { getGenresFromUrl } from "../../utils/url";

function HomePage() {
    const dispatch = useAppDispatch();
    const setSearchParams = useSearchParams()[1];
    const { page, sortBy, genres } = useAppSelector(
        (state) => state.homePageState,
    );

    const { data, isPending } = useQuery({
        queryKey: ["genres"],
        queryFn: getGenres,
    });

    // Get initial genres from url
    useEffect(() => {
        if (isPending) return;

        const urlGenres = getGenresFromUrl();
        const genres = data?.filter((genre) => urlGenres.includes(genre.name));

        dispatch(setGenres(genres));
    }, [isPending, data, setSearchParams, dispatch]);

    // Set Url query based on redux state
    useEffect(() => {
        if (isPending) return;

        const params: {
            page?: string;
            sortBy?: Option["value"];
            genres?: GenreType["name"];
        } = {};

        if (page !== 1) params.page = page.toString();
        if (sortBy) params.sortBy = sortBy.value;
        if (genres.length)
            params.genres = genres.map(({ name }) => name).join(" ");

        setSearchParams(params);
    }, [page, sortBy, genres, isPending, setSearchParams]);

    return (
        <section className={css.homePage}>
            <div className="container">
                <h1>Home Page</h1>

                <div className={css.moviesFilters}>
                    <MoviesFilters />
                </div>

                <div className={css.moviesList}>
                    <HomeMovieListContainer />
                </div>
            </div>
        </section>
    );
}

export default HomePage;
