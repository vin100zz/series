export class Actor {
  id: string;
  name: string;

  constructor(name: string) {
    this.name = name;

    this.id = this.name.toLowerCase().replace(/ /g, '_');
  }
}