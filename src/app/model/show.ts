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

  id: string;
  title: string;
  overview: string;
  rating: number;

  backgroundPath: string;
  posterPath: string;

  directions: Direction[];
  casts: Cast[];

  status: number;

  constructor(data: Object, type: string, status: string) {
    this.data = data;
    this.type = type;

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

    this.status = parseInt(status, 10);
  }

}