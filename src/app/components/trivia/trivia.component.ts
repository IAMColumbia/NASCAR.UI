import { Component, OnInit } from '@angular/core';
import { TriviaRecord } from '../../models/trivia-game';
import { Question } from '../../models/question';
import { TriviaService } from '../../services/trivia.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent implements OnInit{

  //game: TriviaRecord;
  started: boolean = false;
  levelSelect: boolean = false;
  difficulty: number = 0;
  questionNum: number = 0;
  score: number = 0;
  questions: any = [];
  timer = 5;
  interval$: any;
  triviaCompleted: Boolean = false;

  ngOnInit(): void {
  } 

  constructor(private triviaSerivce: TriviaService){}

  StartGame():void {
    this.levelSelect = true;
  }

  LevelSelect(difficulty: number): void{
    this.difficulty = difficulty;
    this.started = true;
    this.levelSelect = false;
    if(difficulty === 1){
      this.triviaSerivce.GetLevelOneQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }
    else if(difficulty === 2){
      this.triviaSerivce.GetLevelTwoQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }
    else if(difficulty === 3){
      this.triviaSerivce.GetLevelThreeQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }

    this.StartTimer();
  }

  Answer(questionNumber: number, option: any){
    //if last question go to end screen
    if(questionNumber === this.questions.length){
      this.triviaCompleted = true;
      this.StopTimer();
    }
    //if correct
    if(option.correct){
      this.score += 100;
      setTimeout(() => {
        this.questionNum++;
        this.ResetTimer();
      }, 1000);
    }
    else{
      setTimeout(() => {
        this.questionNum++;
        this.ResetTimer();
      },1000);
    }


  }

  StartTimer(){
    this.interval$ = interval(1000)
        .subscribe(val => {
          this.timer--;
          if(this.timer === 0){
            this.questionNum++;
            this.timer = 5;
          }
        });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },25000);
  }

  StopTimer(){
    this.interval$.unsubscribe();
    this.timer = 0;
  }

  ResetTimer(){
    this.StopTimer();
    this.timer = 5;
    this.StartTimer();
  }

  ResetQuiz(){

  }
}
