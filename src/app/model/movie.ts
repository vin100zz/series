import { Cast } from './cast';

export class Movie {
  id: string;
  title: string;
  originalTitle: string;
  releaseYear: number;

  tagline: string;
  overview: string;

  popularity: number;
  rating: number;

  backgroundPath: string;
  posterPath: string;

  casts: Cast[];
  directors: string[];

  status: number = -1;

  constructor(dto: Object) {
    this.id = dto['id'] + '';
    this.title = dto['title'];
    this.originalTitle = dto['original_title'];
    this.releaseYear = parseInt(dto['release_date'].substr(0, 4), 10);

    this.tagline = dto['tagline'];
    this.overview = dto['overview'];

    this.popularity = dto['popularity'];
    this.rating = dto['vote_average'];

    this.backgroundPath = dto['backdrop_path'];
    this.posterPath = dto['poster_path'];

    this.casts = dto['credits']['cast']
      .splice(0, 5)
      .map(castDto => new Cast(castDto));

    this.directors = dto['credits']['crew']
      .filter(crewDto => crewDto.job === 'Director')
      .map(directorDto => directorDto.name);
  }

}