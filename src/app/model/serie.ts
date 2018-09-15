import { Show } from '../model/show';

export class Serie extends Show {
  static TYPE: string = 'S';
  static TMDB_KEY = 'tv';

  constructor(data: Object, status: string = "-1") {
    super(data, Serie.TYPE, status);
  }

}