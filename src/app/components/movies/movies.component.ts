import { Component, OnInit } from '@angular/core';

import { ShowService } from '../../services/show.service';
import { Show } from '../../model/show';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Show[] = [];

  watchedFilter: boolean = false;
  toWatchFilter: boolean = true;

  sortCriterion: string = 'rating';
  sortAsc = false;

  constructor(private showService: ShowService) {
  }

  ngOnInit() {
    this.showService.list().subscribe(movies => this.movies = movies);
  }

  filterAndSortMovies(): Show[] {
    return this.movies
      .filter(movie => movie.watched === this.watchedFilter && movie.toWatch === this.toWatchFilter)
      .sort((movie1, movie2) => {
        /* if (this.sortCriterion === 'year') {
           return (this.sortAsc ? 1 : -1) * (movie1.releaseYear - movie2.releaseYear);
         }*/
        if (this.sortCriterion === 'rating') {
          return (this.sortAsc ? 1 : -1) * (movie1.rating - movie2.rating);
        }
        return (this.sortAsc ? 1 : -1) * (movie1.directions[0].personName.localeCompare(movie2.directions[0].personName));
      });
  }

  toggleWatchedFilter(): void {
    this.watchedFilter = !this.watchedFilter;
  }

  toggleToWatchFilter(): void {
    this.toWatchFilter = !this.toWatchFilter;
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
