import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../../services/trivia.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent implements OnInit{

  started: boolean = false;
  menu: boolean = true;
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

  scoreRound1: number = 0;
  scoreRound2: number = 0;
  scoreRound3: number = 0;

  completedRound1: boolean = false;
  completedRound2: boolean = false;
  completedRound3: boolean = false;

  endRoundIndex: number = 6;
  card1: number = 1;
  card2: number = 2;
  card3: number = 3;
  card4: number = 4;
  card5: number = 5;
  card6: number = 6;

  ngOnInit(): void {
    this.ResetQuiz();
    this.levelSelect = false;
  } 

  constructor(private triviaSerivce: TriviaService, private router: Router){}

  StartGame($event: boolean) {
    console.log('game started');
    this.levelSelect = $event;
    this.menu = false;
    console.log(this.levelSelect);
    console.log(this.menu);
  }

  LevelSelect(): void{
    this.started = true;
    this.levelSelect = false;
    if(this.difficulty === 1){
      this.triviaSerivce.GetLevelOneQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }
    else if(this.difficulty === 2){
      this.triviaSerivce.GetLevelTwoQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }
    else if(this.difficulty === 3){
      this.triviaSerivce.GetLevelThreeQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }
    this.started = true;

  }

  DisplayLevelSelectPopUp(level: number){
    this.difficulty = level;
  }

  RemoveLevelPopUp(){
    this.difficulty = 0;
  }

  UpdateProgress($event: {questions: any[], score: number}){
    if(this.difficulty === 1){
      this.completedRound1 = true;
      this.scoreRound1 = $event.score;
      this.questions = $event.questions;
    }
    else if(this.difficulty === 2){
      this.completedRound2 = true;
      this.scoreRound2 = $event.score;
      this.questions = $event.questions;
    }
    else if(this.difficulty === 3){
      this.completedRound3 = true;
      this.scoreRound3 = $event.score;
      this.questions = $event.questions;
    }
    this.score = $event.score;
    this.triviaCompleted = true;
  }

  ResetQuiz(){
    this.triviaCompleted = false;
    this.levelSelect = false;
    this.started = false;
    this.questionDisplay = false;
    this.answerDisplay = false;
    this.questionNum = 0;
    this.difficulty = 0;
    this.menu = true;
    this.score = 0;
    this.timer = 2;
  }

  NextLevel(){
    this.triviaCompleted = false;
    this.levelSelect = true;
    this.started = false;
    this.questionDisplay = false;
    this.answerDisplay = false;
    this.questionNum = 0;
    this.score = 0;
    this.difficulty = 0;
    this.timer = 2;
    this.endRoundIndex = 6;
    this.card1 = 1;
    this.card2 = 2;
    this.card3 = 3;
    this.card4 = 4;
    this.card5 = 5;
    this.card6 = 6;
  }

  Home(){
    this.router.navigateByUrl('/');
  }

  NextCard(){
    if(this.endRoundIndex+1 > 5){
      this.endRoundIndex = 0;
    }
    else{
      this.endRoundIndex++;
    }
    

    if(this.card1+1 > 6){
      this.card1 = 1;
    }
    else{
      this.card1++;
    }

    if(this.card2+1 > 6){
      this.card2 = 1;
    }
    else{
      this.card2++;
    }

    if(this.card3+1 > 6){
      this.card3 = 1;
    }
    else{
      this.card3++;
    }

    if(this.card4+1 > 6){
      this.card4 = 1;
    }
    else{
      this.card4++;
    }

    if(this.card5+1 > 6){
      this.card5 = 1;
    }
    else{
      this.card5++;
    }

    if(this.card6+1 > 6){
      this.card6 = 1;
    }
    else{
      this.card6++;
    }

    console.log(this.endRoundIndex);
  }

  GetCorrectAnswer(){
    let response: string = "";

    this.questions[this.endRoundIndex].options.forEach((option: any) => {
      if(option.correct == true){
        response = option.text;
      }
    });

    return response;
  }

  GetUserAnswer(){
    
    let response: string = "";

    this.questions[this.endRoundIndex].options.forEach((option: any) => {
      if(option.chosen == true){
        response = option.text;
      }
    });

    return response;
  }
}
