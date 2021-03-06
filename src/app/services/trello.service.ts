import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class TrelloService {

  private readonly downloadURL = "http://localhost:3000/TrelloInfo/getBoards";
  private readonly writeToFileURL = "http://localhost:3000/TrelloInfo/writeToFile";

  constructor(private http: HttpClient) { }
  // boards = new EventEmitter<any>();

  public getBoards() {
    return this.http.get<any>(this.downloadURL);
  }

  public writeToFile(board) {
    return this.http.post<any>(this.writeToFileURL, board);
  }
}
