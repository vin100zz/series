import { Episode } from './episode';
import { Role } from './role';

export class Serie {
  id: string;
  name: string;
  roles: Role[];
  episodes: Episode[];

  constructor(dto: Object) {
    this.name = dto['name'];
    this.roles = (dto['roles'] || []).map(roleDto => new Role(roleDto));
    this.episodes = (dto['episodes'] || []).map(episodeDto => new Episode(episodeDto));

    this.id = this.name.toLowerCase().replace(/ /g, '_');
  }
}