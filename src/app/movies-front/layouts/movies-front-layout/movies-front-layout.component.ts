import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-movies-front-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './movies-front-layout.component.html',
})
export class MoviesFrontLayoutComponent { }
