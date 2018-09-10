class Direction {
  movieId: number;
  title: string;

  constructor(dto: Object) {
    this.movieId = dto['id'];
    this.title = dto['title'];
  }
}

class Cast {
  movieId: number;
  title: string;
  character: string;

  constructor(dto: Object) {
    this.movieId = dto['id'];
    this.title = dto['title'];
    this.character = dto['character'];
  }
}

export class Person {
  id: string;
  name: string;

  birthYear: number;
  deathYear: number;

  popularity: number;

  biography: string;

  profilePath: string;

  directions: Direction[];
  casts: Cast[];

  constructor(dto: Object) {
    this.id = dto['id'] + '';
    this.name = dto['name'];
    this.birthYear = parseInt(dto['birthday'].substr(0, 4), 10);
    this.deathYear = dto['deathday'] ? parseInt(dto['deathday'].substr(0, 4), 10) : null;
    this.popularity = dto['popularity'];
    this.biography = dto['biography'];
    this.profilePath = dto['profile_path'];

    this.directions = dto['combined_credits']['crew']
      .filter(crewDto => crewDto.job === 'Director')
      .map(crewDto => new Direction(crewDto));

    this.casts = dto['combined_credits']['cast']
      .map(castDto => new Cast(castDto));
  }
}