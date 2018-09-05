import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { Subject } from 'rxjs';
import "rxjs/Rx";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  querySubject: Subject<string> = new Subject();

  results = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.querySubject.debounceTime(500).subscribe(query => {
      if (!query) {
        this.results = [];
        return;
      }
      this.movieService.search(query).subscribe(searchResultsDto => {
        this.results = searchResultsDto['results'].slice(0, 10).map(resultDto => {
          return {
            type: resultDto.media_type,
            id: resultDto.id,
            label: resultDto.media_type === 'movie' ? resultDto.title : resultDto.name
          };
        });
      });
    });
  }

  onChange(query): void {
    this.querySubject.next(query);
  }

}