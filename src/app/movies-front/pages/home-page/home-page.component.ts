import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MovieService } from '@movies/services/movie.service';
import { PaginationService } from 'src/app/shared/components/pagination/pagination.service';
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { MovieCardComponent } from "../../../movies/components/movie-card/movie-card.component";

@Component({
  selector: 'app-home-page',
  imports: [PaginationComponent, MovieCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  paginationService = inject(PaginationService);
   movieService = inject(MovieService);

  moviesResource = rxResource({
    request: () => ({ page: this.paginationService.currentPage() - 1 }),
    loader: ({ request }) => {
      return this.movieService.getAllMovies({
        offset: request.page * 9,
      });
    },
  });
}
