import { Component, OnInit } from '@angular/core';
import { TriviaRecord } from '../../models/trivia-game';
import { Question } from '../../models/question';
import { TriviaService } from '../../services/trivia.service';
import { interval } from 'rxjs';
import { NgOptimizedImage } from '@angular/common'

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
  questionDisplay: Boolean = false;
  answerDisplay: Boolean = false;

  difficulty: number = 0;
  questionNum: number = 0;
  score: number = 0;
  questions: any = [];

  timer = 5;
  interval$: any;

  ngOnInit(): void {
    this.ResetQuiz();
    this.levelSelect = false;
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

    this.DisplayQuestion();
    
  }

  DisplayQuestion(){
    this.questionDisplay = true;
    setTimeout(()=>{
      this.StartTimer();
    }, 500);
    

  }

  Answer(questionNumber: number, option: any){
    this.StopQuestionTimer();
    //if correct
    if(option.correct){
      this.score += 100;
    }

    //if last question go to end screen
    if(questionNumber === this.questions.length){
      setTimeout(() => {
        this.triviaCompleted = true;
      },500);
    }
    else{
      setTimeout(() => {
        this.questionNum++;
        this.answerDisplay = false;
        this.timer = 5;
        this.DisplayQuestion();
      },500);
    }
  }

  ResetQuiz(){
    this.triviaCompleted = false;
    this.levelSelect = false;
    this.started = false;
    this.questionDisplay = false;
    this.answerDisplay = false;
    this.questionNum = 0;
    this.score = 0;
    this.timer = 5;
  }

  NextLevel(){
    this.triviaCompleted = false;
    this.levelSelect = true;
    this.started = false;
    this.questionDisplay = false;
    this.answerDisplay = false;
    this.questionNum = 0;
    this.score = 0;
    this.StopQuestionTimer();
    this.timer = 5;
    
  }

  StartQuestionTimer(){
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

  StopQuestionTimer(){
    this.interval$.unsubscribe();
  }

  ResetQuestionTimer(){
    this.StopQuestionTimer();
    this.timer = 30;
  }
  
  StartTimer(){
    this.interval$ = interval(1000)
        .subscribe(val => {
          this.timer--;
          if(this.timer === 0){
            this.answerDisplay = true;
            this.ResetQuestionTimer();
            this.StartQuestionTimer();
          }
        });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },800000);
  }
}
