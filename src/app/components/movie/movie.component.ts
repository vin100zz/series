import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe(movie => this.movie = movie);
  }

  updateStatus(): void {
    ++this.movie.status;
    this.movieService.updateStatus(this.movie.id, this.movie.status);
  }

}
