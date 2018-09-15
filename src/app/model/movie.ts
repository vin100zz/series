import { Show } from '../model/show';

export class Movie extends Show {
  static TYPE: string = 'M';
  static TMDB_KEY = 'movie';

  originalTitle: string;
  releaseYear: number;
  tagline: string;

  constructor(data: Object, status: string = "-1") {
    super(data, Movie.TYPE, status);

    this.originalTitle = data['original_title'];
    this.releaseYear = parseInt(data['release_date'].substr(0, 4), 10);
    this.tagline = data['tagline'];
    this.overview = data['overview'];
  }

}