import { Component, input } from '@angular/core';
import { Movie } from '@movies/interfaces/movie-interface';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
    movie = input.required<Movie>();
}
