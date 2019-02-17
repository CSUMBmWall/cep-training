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
  saveStatus = 'Nothing Written';

  selectedBoard = {
    name: null,
    id: null
  }

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.trelloService.getBoards()
      .subscribe((boards) => {
        this.boards = boards;
        this.selectedBoard = boards[0];
      });
  }

  writeToFile(form) {
    console.log(form.value.board.name);
    // console.log(form.value.board.name);
    console.log(form.value.board.id);
    this.trelloService.writeToFile(form.value.board)
      .subscribe((status) => {
        this.saveStatus = status;
      });

  }

  filesPicked(files) {
    console.log(files);
  }

}
