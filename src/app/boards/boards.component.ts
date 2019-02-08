import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {TrelloService} from "../services/trello.service";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards;
  selectedBoardId;

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.trelloService.getBoards()
      .subscribe((boards) => {
        this.boards = boards;
        this.selectedBoardId = boards[0].id;
      });
  }

  setBoard(event) {
    this.selectedBoardId = event.target.value;
  }

  writeToFile() {

  }

}
