import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { SerieService } from '../../services/serie.service';
import { Serie } from '../../model/serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  serie: Serie;

  constructor(private route: ActivatedRoute, private router: Router, private serieService: SerieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serieService.get(params.id).subscribe(serie => this.serie = serie);
    });
  }

}
