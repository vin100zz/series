import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Serie } from '../model/serie';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient) {
  }

  get(id: string): Observable<Serie> {
    return this.httpClient.get('https://api.themoviedb.org/3/tv/' + id + '?api_key=7aac1d19d45ad4753555583cabc0832d&language=fr&region=FR&append_to_response=credits')
      .map(dto => new Serie(dto));
  }

}
