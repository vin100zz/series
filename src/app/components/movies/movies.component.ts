import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { MovieStatus } from '../../model/movieStatus';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieStatuses: MovieStatus[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.listStatuses().subscribe(movieStatuses => this.movieStatuses = movieStatuses);
  }

}
