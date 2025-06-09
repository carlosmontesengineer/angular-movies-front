export interface CreateFavoriteMovie {
  movieId: string;
  imdbID: string;
  rating?: number;
  comment?: string;
}
