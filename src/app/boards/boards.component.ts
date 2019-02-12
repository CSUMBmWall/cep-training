import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {TrelloService} from "../services/trello.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards;
  selectedBoardId;
  selectedBoardName;

  boardName;
  boardID;

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.trelloService.getBoards()
      .subscribe((boards) => {
        this.boards = boards;
        this.selectedBoardId = boards[0].id;
      });
  }

  setBoard(event, board) {
    console.log(board);
    // console.log(Object.keys(event.target));
    // // console.log(Object.values(event.target.value));
    // console.log(event.target.value);
    this.selectedBoardId = event.target.value;
  }

  writeToFile(form: NgForm) {
    console.log(form.value);
    // console.log(name);
    // console.log(id);
  }

  filesPicked(files) {
    console.log(files);
  }

}
