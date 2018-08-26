import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeriesComponent } from './series/series.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'series', component: SeriesComponent },
  { path: 'detail/:id', component: SerieDetailComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }