import { AUTHORIZATION, BASE_URL } from "../../../shared/api/config";
import type { MovieDetailsType } from "../../movies/api/movies.types";

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
