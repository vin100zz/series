import { Actor } from './actor';

export class Role {
  actor: Actor;
  character: string;

  constructor(dto: Object) {
    this.actor = new Actor(dto['actor']);
    this.character = dto['character'];
  }
}