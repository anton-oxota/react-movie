import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const BASE_URL = "https://api.themoviedb.org/3";
const AUTHORIZATION =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWNlYzI2ZTM5MGZkYTczODcyMWIyMDMzNWI0MDdiOCIsIm5iZiI6MTc1OTc0NTY3MC44MDE5OTk4LCJzdWIiOiI2OGUzOTY4NmNkMzcyYTRjZGRjMjI5NmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GTCTsCDdw7c033jsf_ymOgT_oYcVJ-ailARUIAWqGyc";

export type GenreType = {
    id: number;
    name: string;
};

export async function getGenres(): Promise<GenreType[]> {
    const url = `${BASE_URL}/genre/movie/list?language=en`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: AUTHORIZATION,
        },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error("Can not get genres");
    }

    const data = await response.json();

    return data.genres;
}

export type MovieType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
};

export async function getMovies(): Promise<MovieType[]> {
    const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: AUTHORIZATION,
        },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error("Can not get movies");
    }

    const data = await response.json();

    return data.results;
}
