import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { VSerie } from '../model/vserie';
import { SerieService } from '../serie.service';

@Component({
	selector: 'app-serie-detail',
	templateUrl: './serie-detail.component.html',
	styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

	@Input() serie: VSerie;

	constructor(
		private route: ActivatedRoute,
		private serieService: SerieService
	) { }

	ngOnInit(): void {
		this.getSerie();
	}

	getSerie(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.serieService.getSerie(id)
			.subscribe(serie => this.serie = serie);
	}

}
