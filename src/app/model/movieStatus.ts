
export class MovieStatus {
  id: string;
  status: number;

  constructor(dto: Object) {
    this.id = dto['id'];
    this.status = parseInt(dto['status'], 10);
  }

}