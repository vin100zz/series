import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Serie } from './model/serie';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient) {
    this.getSeries();
  }

  getSeries(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>('assets/data.json')
      .map(seriesDto => seriesDto.map(serieDto => new Serie(serieDto)))
  }

  getSerie(id: String): Observable<Serie> {
    return Observable.create(observer => {
      this.getSeries().subscribe(series => {
        let serie: Serie = series.find(serie => serie.id === id);
        observer.next(serie);
        observer.complete();
      });
    });
  }

}
