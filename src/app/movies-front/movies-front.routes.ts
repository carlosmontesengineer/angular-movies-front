import { Routes } from '@angular/router';
import { MoviesFrontLayoutComponent } from './layouts/movies-front-layout/movies-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserFavoritesPageComponent } from './pages/user-favorites-page/user-favorites-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MovieCalificationPageComponent } from './pages/movie-calification-page/movie-calification-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthenticatedGuard } from '@auth/guards/authenticated.guard';

export const moviesFrontRouter: Routes = [
  {
    path: '',
    component: MoviesFrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'favorites',
        component: UserFavoritesPageComponent,
        canMatch: [AuthenticatedGuard],
      },
      {
        path: 'search',
        component: SearchPageComponent,
        canMatch: [AuthenticatedGuard],
      },
      {
        path: 'calification/:id',
        component: NotFoundPageComponent,
        canMatch: [AuthenticatedGuard],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default moviesFrontRouter;
