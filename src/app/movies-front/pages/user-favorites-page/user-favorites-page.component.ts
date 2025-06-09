import { Component, inject } from '@angular/core';
import { MovieCardComponent } from '../../../movies/components/movie-card/movie-card.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { MovieService } from '@movies/services/movie.service';

@Component({
  selector: 'app-user-favorites-page',
  imports: [MovieCardComponent],
  templateUrl: './user-favorites-page.component.html',
})
export class UserFavoritesPageComponent {
  movieService = inject(MovieService);

  favoriteResource = rxResource({
    loader: () => this.movieService.getFavoritesMovies(),
  });
}
