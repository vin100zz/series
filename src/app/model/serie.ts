import { Show } from '../model/show';

export class Serie extends Show {
  static TYPE: string = 'S';
  static TMDB_KEY = 'tv';

  constructor(data: Object, inDb: boolean, watched: string, toWatch: string) {
    super(data, Serie.TYPE, inDb, watched, toWatch);
  }

}