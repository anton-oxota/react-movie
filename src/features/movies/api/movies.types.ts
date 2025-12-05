export type GenreType = {
    id: number;
    name: string;
};

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

export type GetMoviesResponse = {
    results: MovieType[];
    total_pages: number;
};

export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

export type ProductionCounty = {
    iso_3166_1: string;
    name: string;
};

export type SpokenLanguage = {
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
