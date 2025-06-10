import { Movie } from "./movie-interface";

export interface PaginationMovies {
    count: number,
    pages: number,
    movies : Movie[],
}
