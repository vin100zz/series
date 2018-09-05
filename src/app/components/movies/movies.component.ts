import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movieService.list().subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
  }

}
