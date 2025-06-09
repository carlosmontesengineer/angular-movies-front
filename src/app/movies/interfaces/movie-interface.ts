import { Type } from "./movie-type";



export interface Movie {
   id?:string;
   title:  string;
   year:   string;
   imdbID: string;
   type:   Type;
   poster: string;
}
