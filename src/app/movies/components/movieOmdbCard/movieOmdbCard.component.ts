import { Component, inject, input } from '@angular/core';
import { Movie } from '@movies/interfaces/movie-interface';
import { OmdbMovie } from '@movies/interfaces/movies-omdb.interface';
import { MovieService } from '@movies/services/movie.service';
import { firstValueFrom } from 'rxjs';
import { AlertService } from 'src/app/shared/mappers/alert.services';

@Component({
  selector: 'app-movie-omdb-card',
  imports: [],
  templateUrl: './movieOmdbCard.component.html',
})
export class MovieOmdbCardComponent {
  movie = input.required<OmdbMovie>();
  movieService = inject(MovieService);

  alert = inject(AlertService);

  constructor() {}

  async addMovieToFavorite(movie: OmdbMovie) {
    try {

      const findMovie = await firstValueFrom(
        this.movieService.findMovieByimdbID(movie.imdbID)
      );

      if (!findMovie) {
        const createRes = await firstValueFrom(
          this.movieService.createMovie({
            title: movie.Title,
            imdbID: movie.imdbID,
            poster: movie.Poster,
            type: movie.Type,
            year: movie.Year,
          })
        );

        const favorite = this.movieService.createFavoriteMovie({
          movieId: createRes.id!,
          imdbID: createRes.imdbID,
        });

        favorite.subscribe((res) => {
          this.alert.success('La película se ha agregado a favoritos', 'Bien!');
        })
      } else {
        const favorite = await firstValueFrom(this.movieService.createFavoriteMovie({
          movieId: findMovie.id!,
          imdbID: findMovie.imdbID,
        }));


          this.alert.success('La película se ha agregado a favoritos', 'Bien!');

      }
    } catch (error:any) {

      if (error.error.statusCode === 400){
         this.alert.warning('La pelicula ya se ha agregado a favoritos');
         return;
      }
      this.alert.error('ha ocurrido un error al agregar a favoritos');
    }
  }
}
