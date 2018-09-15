import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../model/movie';

import { ShowService } from './show.service';

import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient, private showService: ShowService) {
  }

  save(movie: Movie): Observable<Movie> {
    return this.showService.save<Movie>(movie, this.mapDto);
  }

  update(id: string): Observable<Movie> {
    return this.showService.update<Movie>(id, Movie.TYPE, this.mapDto);
  }

  get(id: String): Observable<Movie> {
    return this.showService.get<Movie>(id, Movie.TYPE, Movie.TMDB_KEY, this.mapDto, this.mapData);
  }

  delete(id: string): Observable<Object> {
    return this.showService.update<Movie>(id, Movie.TYPE, this.mapDto);
  }

  mapDto(dto: Object): Movie {
    return new Movie(dto['data'], dto['status']);
  }

  mapData(data: Object): Movie {
    return new Movie(data);
  }

}
