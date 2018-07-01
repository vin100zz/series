import { Role } from './role';

export class Episode {
  season: string;
  year: number;
  title: string;
  storyline: string;
  roles: Role[];

  constructor(dto: Object) {
    this.season = dto['season'];
    this.year = dto['year'];
    this.title = dto['title'];
    this.storyline = dto['storyline'];
    this.roles = (dto['roles'] || []).map(roleDto => new Role(roleDto));
  }
}