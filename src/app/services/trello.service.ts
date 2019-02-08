import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class TrelloService {

  private readonly downloadURL = "http://localhost:3000/TrelloInfo/getBoards";

  constructor(private http: HttpClient) { }
  boards = new EventEmitter<any>();

  public getBoards() {
    return this.http
      .post<any>(this.downloadURL);
  }
}
