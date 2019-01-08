import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.get(params.id).subscribe(movie => this.movie = movie);
    });
  }

  save(): void {
    this.movieService.save(this.movie).subscribe(movie => {
      this.movie = movie;
    });
  }

  toggleWatched(): void {
    if (!this.movie.inDb) {
      this.movie.watched = true;
      this.save();
    } else {
      this.movieService.update(this.movie.id, !this.movie.watched, this.movie.toWatch).subscribe(movie => {
        this.movie = movie;
      });
    }
  }

  toggleToWatch(): void {
    if (!this.movie.inDb) {
      this.movie.toWatch = true;
      this.save();
    } else {
      this.movieService.update(this.movie.id, this.movie.watched, !this.movie.toWatch).subscribe(movie => {
        this.movie = movie;
      });
    }
  }

}
