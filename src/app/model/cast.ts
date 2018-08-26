import { Actor } from './actor';

export class Cast {
  actor: string;
  character: string;

  constructor(dto: Object) {
    this.actor = dto['name'];
    this.character = dto['character'];
  }

  getActor(): string {
    return this.actor;
  }

  getCharacter(): string {
    return this.character;
  }
}