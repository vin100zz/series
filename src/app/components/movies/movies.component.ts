import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  statusFilter: number = 0;

  sortCriterion: string = 'rating';
  sortAsc = false;

  constructor(private movieService: MovieService) {
    this.movieService.list().subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
  }

  filterAndSortMovies(): Movie[] {
    return this.movies
      .filter(movie => movie.status === this.statusFilter)
      .sort((movie1, movie2) => {
        if (this.sortCriterion === 'year') {
          return (this.sortAsc ? 1 : -1) * (movie1.releaseYear - movie2.releaseYear);
        }
        if (this.sortCriterion === 'rating') {
          return (this.sortAsc ? 1 : -1) * (movie1.rating - movie2.rating);
        }
        return (this.sortAsc ? 1 : -1) * (movie1.directors.join(', ').localeCompare(movie2.directors.join(', ')));
      });
  }

  setStatusFilter(statusFilter: number): void {
    this.statusFilter = statusFilter;
  }

  setSortCriterion(sortCriterion: string): void {
    if (this.sortCriterion === sortCriterion) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortCriterion = sortCriterion;
      this.sortAsc = (sortCriterion === 'director');
    }
  }

}
