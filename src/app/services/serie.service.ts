import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Serie } from '../model/serie';

import { ShowService } from './show.service';

import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient, private showService: ShowService) {
  }

  save(serie: Serie): Observable<Serie> {
    return this.showService.save<Serie>(serie, this.mapDto);
  }

  update(id: string): Observable<Serie> {
    return this.showService.update<Serie>(id, Serie.TYPE, this.mapDto);
  }

  get(id: String): Observable<Serie> {
    return this.showService.get<Serie>(id, Serie.TYPE, Serie.TMDB_KEY, this.mapDto, this.mapData);
  }

  delete(id: string): Observable<Object> {
    return this.showService.update<Serie>(id, Serie.TYPE, this.mapDto);
  }

  mapDto(dto: Object): Serie {
    return new Serie(dto['data'], dto['status']);
  }

  mapData(data: Object): Serie {
    return new Serie(data);
  }

}
