import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';

import { FormsModule } from '@angular/forms';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { RolesComponent } from './roles/roles.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SerieDetailComponent,
    RolesComponent,
    MovieComponent,
    MoviesComponent,
    SearchComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
