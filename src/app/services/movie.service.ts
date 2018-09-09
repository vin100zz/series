import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../model/movie';
import { MovieStatus } from '../model/movieStatus';

import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  search(query: string): Observable<Object> {
    return this.httpClient.get('https://api.themoviedb.org/3/search/multi?api_key=7aac1d19d45ad4753555583cabc0832d&language=fr&region=FR&query=' + query);
  }

  save(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>('server/save.php?ts=' + Date.now() + '&id=' + movie.id, movie, httpOptions);
  }

  list(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('server/list.php?ts=' + Date.now() + '&');
  }

  update(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>('server/update.php?ts=' + Date.now() + '&id=' + id);
  }

  get(id: String): Observable<Movie> {
    return new Observable<Movie>((observer) => {
      this.httpClient.get<Movie>('server/get.php?ts=' + Date.now() + '&id=' + id).subscribe(movieDto => {
        if (movieDto) {
          observer.next(movieDto);
          observer.complete();
          return;
        }
        this.httpClient.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=7aac1d19d45ad4753555583cabc0832d&language=fr&region=FR&append_to_response=credits')
          .map(dto => {
            let movie: Movie = new Movie(dto);
            observer.next(movie);
            observer.complete();
            return movie;
          }).subscribe();
      });
    })
  }

  delete(id: string): Observable<Object> {
    return this.httpClient.get('server/delete.php?ts=' + Date.now() + '&id=' + id);
  }

}
