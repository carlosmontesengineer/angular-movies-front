import { Component, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '@movies/services/movie.service';
import { firstValueFrom } from 'rxjs';
import { AlertService } from 'src/app/shared/alerts/alert.services';

@Component({
  selector: 'app-calification-fotter',
  imports: [ReactiveFormsModule],
  templateUrl: './calification-fotter.component.html',
})
export class CalificationFotterComponent {
  rating = input<number>();
  comment = input<string>();
  movieId = input.required<string>();

  movieService = inject(MovieService);
  alert = inject(AlertService);

  fb = inject(FormBuilder);

  calificationForm = this.fb.group({
    calification: ['1', Validators.required],
    comment: ['', Validators.required],
  });

  ngOnInit() {
    this.calificationForm.patchValue({
      calification: this.rating()?.toString(),
      comment: this.comment(),
    });
  }

  async updateFavoriteCalification() {
    try {
      const res = await firstValueFrom(
        this.movieService.updateCalification({
          comment: this.calificationForm.value.comment ?? '',
          rating: Number(this.calificationForm.value.calification) ?? 0,
          movieId: this.movieId(),
        })
      );

      this.alert.success('Película calificada con éxito','Bien!')
    } catch (error) {
      this.alert.error('ha ocurrido un error al calificar')
    }
  }
}
