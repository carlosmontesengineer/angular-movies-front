import { Movie } from "./movie-interface";

export interface Favorite {
  id:        string;
  rating?:    number;
  createdAt: Date;
  comment?:   string;
  movie:     Movie;
}

