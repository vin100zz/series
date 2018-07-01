import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie';
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

  series: Serie[];

  /*serie: Serie = {
    id: 1,
    name: 'Dexter'
  };*/

  /*selectedSerie: Serie;

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }*/

}
