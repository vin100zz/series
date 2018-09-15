import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

import { Show } from './../model/show';
import { Movie } from '../model/movie';
import { Serie } from '../model/serie';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) {
  }

  search(query: string): Observable<Object> {
    return this.httpClient.get('https://api.themoviedb.org/3/search/multi?api_key=7aac1d19d45ad4753555583cabc0832d&language=fr&region=FR&query=' + query);
  }

  list(): Observable<Show[]> {
    return this.httpClient.get<Object[]>('server/list.php?ts=' + Date.now())
      .map(dtoList => {
        return dtoList.map(dto => {
          if (dto['type'] === Movie.TYPE) {
            return new Movie(dto['data'], dto['status']);
          }
          return new Serie(dto['data'], dto['status']);
        });
      });
  }

  save<T>(show: Show, mapDtoFn: (dto: Object) => T): Observable<T> {
    return this.httpClient.post<T>('server/save.php?ts=' + Date.now() + '&type=' + show.type + '&id=' + show.id, show.data, httpOptions).map(mapDtoFn);
  }

  update<T>(id: string, type: string, mapDtoFn: (dto: Object) => T): Observable<T> {
    return this.httpClient.get<T>('server/update.php?ts=' + Date.now() + '&type=' + type + '&id=' + id).map(mapDtoFn);
  }

  get<T>(id: String, type: string, tmdbKey: string, mapDtoFn: (dto: Object) => T, mapDataFn: (dto: Object) => T): Observable<T> {
    return new Observable<T>((observer) => {
      this.httpClient.get<T>('server/get.php?ts=' + Date.now() + '&type=' + type + '&id=' + id).subscribe(dto => {
        if (dto) {
          observer.next(mapDtoFn(dto));
          observer.complete();
          return;
        }
        this.httpClient.get('https://api.themoviedb.org/3/' + tmdbKey + '/' + id + '?api_key=7aac1d19d45ad4753555583cabc0832d&language=fr&region=FR&append_to_response=credits')
          .map(data => {
            observer.next(mapDataFn(data));
            observer.complete();
          }).subscribe();
      });
    })
  }

  delete(id: string, type: string): Observable<Object> {
    return this.httpClient.get('server/delete.php?ts=' + Date.now() + '&type=' + type + '&id=' + id);
  }

}
