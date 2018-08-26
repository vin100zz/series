import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../model/movie';
import { MovieStatus } from '../model/movieStatus';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  listStatuses(): Observable<MovieStatus[]> {
    return this.httpClient.get<MovieStatus[]>('http://localhost/edsa-www/series/server/list.php')
      .map(movieStatusesDto => movieStatusesDto.map(movieStatusDto => new MovieStatus(movieStatusDto)))
  }

  updateStatus(id: string, status: number): void {
    this.httpClient.get('http://localhost/edsa-www/series/server/save.php?id=' + id + '&status=' + status).subscribe();
  }

  getDetails(id: String): Observable<Movie> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=7aac1d19d45ad4753555583cabc0832d&language=fr&region=FR')
      .map(dto => {
        let movie: Movie = new Movie(dto);

        this.httpClient.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=7aac1d19d45ad4753555583cabc0832d&language=fr&region=FR')
          .map(creditsDto => {
            movie.setCredits(creditsDto);
          }).subscribe();

        this.listStatuses().subscribe(movieStatuses => {
          let movieStatus = movieStatuses.find(movieStatus => movieStatus.id === movie.id);
          movie.status = movieStatus ? movieStatus.status : -1;
        });

        return movie;
      });
  }


}
