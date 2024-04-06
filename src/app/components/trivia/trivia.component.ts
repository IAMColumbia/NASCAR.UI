import { Component, OnInit } from '@angular/core';
import { TriviaRecord } from '../../models/trivia-game';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent implements OnInit{

  //game: TriviaRecord;
  started: boolean = false;
  levelSelect: boolean = false;
  difficulty: number = 5;
  questionNum: number = 1;
  score: number = 0;

  question: string = "";

  ngOnInit(): void {
  
  } 

  StartGame():void {
    this.levelSelect = true;
  }

  LevelSelect(difficulty: number): void{
    this.difficulty = difficulty;
    this.started = true;
    this.levelSelect = false;
  }

  Trivia(){
    while(this.questionNum <= 5){
      //get current ?
      //start timer
      //input/time run out
      //prep for next iteration
    }
  }
}
