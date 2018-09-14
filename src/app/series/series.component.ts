import { Component, OnInit } from '@angular/core';
import { VSerie } from '../model/vserie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries()
      .subscribe(series => this.series = series);
  }

  ngOnInit() {
    this.getSeries();
  }

  series: VSerie[];

}
