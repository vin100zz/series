class Direction {
  personId: number;
  personName: string;

  constructor(dto: Object) {
    this.personId = dto['id'];
    this.personName = dto['name'];
  }
}

class Cast {
  personId: number;
  personName: string;
  character: string;

  constructor(dto: Object) {
    this.personId = dto['id'];
    this.personName = dto['name'];
    this.character = dto['character'];
  }
}

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

  directions: Direction[];
  casts: Cast[];

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

    this.directions = dto['credits']['crew']
      .filter(crewDto => crewDto.job === 'Director')
      .map(directorDto => new Direction(directorDto));

    this.casts = dto['credits']['cast']
      .splice(0, 5)
      .map(castDto => new Cast(castDto));

  }

}