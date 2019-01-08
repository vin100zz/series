class Direction {
  personId: number;
  personName: string;

  constructor(data: Object) {
    this.personId = data['id'];
    this.personName = data['name'];
  }
}

class Cast {
  personId: number;
  personName: string;
  character: string;

  constructor(data: Object) {
    this.personId = data['id'];
    this.personName = data['name'];
    this.character = data['character'];
  }
}

export class Show {
  data: Object;
  type: string;

  inDb: boolean;

  id: string;
  title: string;
  overview: string;
  rating: number;

  backgroundPath: string;
  posterPath: string;

  directions: Direction[];
  casts: Cast[];

  watched: boolean;
  toWatch: boolean;

  constructor(data: Object, type: string, inDb: boolean, watched: string, toWatch: string) {
    this.data = data;
    this.type = type;

    this.inDb = inDb;

    this.id = data['id'];
    this.title = data['title'];
    this.overview = data['overview'];
    this.rating = data['vote_average'];

    this.backgroundPath = data['backdrop_path'];
    this.posterPath = data['poster_path'];

    this.directions = data['credits']['crew']
      .filter(crewdata => crewdata.job === 'Director')
      .map(directordata => new Direction(directordata));

    this.casts = data['credits']['cast']
      .splice(0, 5)
      .map(castdata => new Cast(castdata));


    this.watched = watched === 'Y' || watched === 'true';
    this.toWatch = toWatch === 'Y' || toWatch === 'true';
  }

}