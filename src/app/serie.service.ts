import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { VSerie } from './model/vserie';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient) {
    this.getSeries();
  }

  getSeries(): Observable<VSerie[]> {
    return this.httpClient.get<VSerie[]>('assets/data.json')
      .map(seriesDto => seriesDto.map(serieDto => new VSerie(serieDto)))
  }

  getSerie(id: String): Observable<VSerie> {
    return Observable.create(observer => {
      this.getSeries().subscribe(series => {
        let serie: VSerie = series.find(serie => serie.id === id);
        observer.next(serie);
        observer.complete();
      });
    });
  }

}
