import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateFavoriteMovie } from '@movies/interfaces/create-favorite-movie.interface';
import { Favorite } from '@movies/interfaces/favorite.interface';
import { Movie } from '@movies/interfaces/movie-interface';
import { MovieOmdbResponse } from '@movies/interfaces/movies-omdb.interface';
import { PaginationMovies } from '@movies/interfaces/pagination-movies.interface';
import { UpdateFavoriteMovie } from '@movies/interfaces/update-favorite-movie-interface';

import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

interface InputOmdbOptions {
  title: string;
  page?: number;
  type?: string | null;
}

interface Options {
  limit?: number;
  offset?: number;
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  private http = inject(HttpClient);

  constructor() {}

  getMoviesOmdbByIdSlug(
    input: InputOmdbOptions
  ): Observable<MovieOmdbResponse> {
    return this.http
      .post<MovieOmdbResponse>(`${baseUrl}/omdb/searchByTitle`, input)
      .pipe(
        tap((movieResponse) => {
          // console.log(movieResponse);
        })
      );
  }

  getFavoritesMovies(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${baseUrl}/favorites`).pipe();
  }

  findMovieByimdbID(query: string): Observable<Movie> {
    return this.http.get<Movie>(`${baseUrl}/movies/${query}`);
  }

  createMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${baseUrl}/movies`, newMovie);
  }

  createFavoriteMovie(newFavorite: CreateFavoriteMovie): Observable<Favorite> {
    return this.http.post<Favorite>(`${baseUrl}/favorites`, newFavorite);
  }

  updateCalification(newFavorite: UpdateFavoriteMovie): Observable<Favorite> {
    return this.http.patch<Favorite>(
      `${baseUrl}/favorites/${newFavorite.movieId}`,
      newFavorite
    );
  }

  getAllMovies(options: Options): Observable<PaginationMovies> {
    const { limit = 10, offset = 0 } = options;

    return this.http
      .post<PaginationMovies>(`${baseUrl}/movies/get-all`, {
        limit,
        offset,
      })
      .pipe(tap((resp) => console.log(resp)));
  }
}
