import { Component, input } from '@angular/core';
import { CalificationFotterComponent } from "../calification-fotter/calification-fotter.component";
import { Favorite } from '@movies/interfaces/favorite.interface';

@Component({
  selector: 'app-favorite-card',
  imports: [CalificationFotterComponent],
  templateUrl: './favorite-card.component.html',
})
export class FavoriteCardComponent {
    movie = input.required<Favorite>();

    // constructor(){
    //   setTimeout(() => {
    //     console.log(this.movie())
    //   }, 3000);
    // }
 }
