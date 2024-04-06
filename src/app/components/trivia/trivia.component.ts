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
  triviaCompleted: Boolean = false;

  difficulty: number = 0;
  questionNum: number = 0;
  score: number = 0;
  questions: any = [];

  timer = 5;
  interval$: any;

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
    this.StopTimer();
    //if correct
    if(option.correct){
      this.score += 100;
    }

    //if last question go to end screen
    if(questionNumber === this.questions.length){
      setTimeout(() => {
        this.triviaCompleted = true;
      },1000);
    }
    else{
      setTimeout(() => {
        this.questionNum++;
        this.ResetTimer();
        this.StartTimer();
      },1000);
    }
  }

  StartTimer(){
    this.interval$ = interval(1000)
        .subscribe(val => {
          this.timer--;
          if(this.timer === 0){
            let option = {text: ""}
            this.Answer(this.questionNum+1, option);
          }
        });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },800000);
  }

  StopTimer(){
    this.interval$.unsubscribe();
    this.timer = 0;
  }

  ResetTimer(){
    this.StopTimer();
    this.timer = 5;
  }

  ResetQuiz(){
    this.ResetTimer();
    this.triviaCompleted = false;
    this.levelSelect = true;
    this.started = false;
    this.questionNum = 0;
    this.score = 0;
  }
}
