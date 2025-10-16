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
    genre_ids: number[] | undefined;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity?: number;
    poster_path: string | null;
    release_date?: Date;
    title: string;
    video?: false;
    vote_average?: number;
    vote_count?: number;
};

type GetMoviesResponse = {
    results: MovieType[];
    total_pages: number;
};

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

type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

type ProductionCounty = {
    iso_3166_1: string;
    name: string;
};

type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};

export type MovieDetailsType = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null;
    budget: number;
    genres: GenreType[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCounty[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export async function getMovieById(id: string): Promise<MovieDetailsType> {
    const url = `${BASE_URL}/movie/${id}?language=en-US`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: AUTHORIZATION,
        },
    };

    const respose = await fetch(url, options);

    if (!respose.ok) {
        throw new Error("Can not get movie with this id");
    }

    const data = await respose.json();
    return data;
}

export async function getMovieByTitle(
    searchTerm: string
): Promise<GetMoviesResponse> {
    const url = `${BASE_URL}/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;

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
