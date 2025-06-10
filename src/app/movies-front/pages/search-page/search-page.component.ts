import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '@movies/services/movie.service';
import { firstValueFrom } from 'rxjs';
import { Movie } from '@movies/interfaces/movie-interface';
import { MovieOmdbCardComponent } from '../../../movies/components/movieOmdbCard/movieOmdbCard.component';
import { OmdbMovie } from '@movies/interfaces/movies-omdb.interface';
import { AlertService } from 'src/app/shared/alerts/alert.services';

@Component({
  selector: 'app-search-page',
  imports: [ReactiveFormsModule, MovieOmdbCardComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  fb = inject(FormBuilder);
  movieService = inject(MovieService);

  alert = inject(AlertService);

  omDbMovies: OmdbMovie[] = [];

  myForm = this.fb.group({
    query: ['', Validators.required],
    type: [null, Validators.required],
  });

  async searchMovies() {
    if (this.myForm.value.query === '') return;

    try {
      const res = await firstValueFrom(
        this.movieService.getMoviesOmdbByIdSlug({
          title: this.myForm.value.query!,
          type: this.myForm.value.type ?? undefined,
        })
      );

      this.omDbMovies = res.Search;
    } catch (error) {
      this.alert.error('Ha ocurrido un error al buscar peliculas')
    }
  }
}
