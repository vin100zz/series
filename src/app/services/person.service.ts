import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Person } from '../model/person';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  get(id: string): Observable<Person> {
    return this.httpClient.get('https://api.themoviedb.org/3/person/' + id + '?api_key=7aac1d19d45ad4753555583cabc0832d&append_to_response=combined_credits')
      .map(dto => new Person(dto));
  }

}
