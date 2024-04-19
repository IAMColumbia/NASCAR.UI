import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trivia-menu',
  templateUrl: './trivia-menu.component.html',
  styleUrl: './trivia-menu.component.css'
})
export class TriviaMenuComponent {

  @Output() startGame = new EventEmitter<boolean>();

  constructor(){}

  StartGame(){
    this.startGame.emit(true);
  }
}
