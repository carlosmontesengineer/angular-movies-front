import {  Type } from "./movie-type";


export interface MovieOmdbResponse {
  Search:       OmdbMovie[];
  totalResults: string;
  Response:     string;
}

export interface OmdbMovie {
  Title:  string;
  Year:   string;
  imdbID: string;
  Type:   Type;
  Poster: string;
}






