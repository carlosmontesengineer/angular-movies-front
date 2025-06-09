import { Component, input } from '@angular/core';
import { Movie } from '@movies/interfaces/movie-interface';
import { CalificationFotterComponent } from "../calification-fotter/calification-fotter.component";
import { Favorite } from '@movies/interfaces/favorite.interface';

@Component({
  selector: 'app-movie-card',
  imports: [CalificationFotterComponent],
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
    movie = input.required<Favorite>();

    // constructor(){
    //   setTimeout(() => {
    //     console.log(this.movie())
    //   }, 3000);
    // }
 }
