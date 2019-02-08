import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';

import { HttpClientModule } from "@angular/common/http";

// Services
import { TrelloService } from "./services/trello.service";

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
