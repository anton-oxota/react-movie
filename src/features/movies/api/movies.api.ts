import { AUTHORIZATION, BASE_URL } from "../../../shared/api/config";
import type { GenreType, GetMoviesResponse } from "./movies.types";

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

export async function getMovies({
    page,
    genres,
    sortBy,
}: {
    page: number;
    genres?: number[];
    sortBy?: string;
}): Promise<GetMoviesResponse> {
    let url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sortBy}`;

    if (genres?.length) {
        url += `&with_genres=${genres.join("%2C")}`;
    }

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

    return data;
}

export async function getMovieByTitle(
    searchTerm: string,
    page: number,
): Promise<GetMoviesResponse> {
    const url = `${BASE_URL}/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=${page}`;

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: AUTHORIZATION,
        },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Can not fetch movies with ${searchTerm} query`);
    }

    const data = await response.json();
    return data;
}
