import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-trivia-play',
  templateUrl: './trivia-play.component.html',
  styleUrl: './trivia-play.component.css'
})
export class TriviaPlayComponent {
  
  @Output() results =  new EventEmitter<{questions: any[], score: number}>();
  @Input() difficulty: number = 0;
  @Input() questions: any = [];

  started: boolean = false;
  questionDisplay: boolean = false;
  answerDisplay: boolean = false;

  questionNum: number = 0;
  score: number = 0;

  timer = 2;
  interval$: any;
  timeout: any;

  ngOnInit(){
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

    option.chosen = true;

    //if correct
    if(option.correct){
      this.score += (this.difficulty * 100);
      this.questions[this.questionNum].correct = true;
    }

    //if last question go to end screen
    if(questionNumber === this.questions.length){
      setTimeout(() => {
        const questions = this.questions;
        const score = this.score;
        this.StopQuestionTimer();
        this.ResetQuiz();
        this.results.emit({questions, score})
      },500);
    }
    else{
      setTimeout(() => {
        this.questionNum++;
        this.answerDisplay = false;
        this.timer = 2;
        this.DisplayQuestion();
      },500);
    }
  }

  ResetQuiz(){
    this.started = false;
    this.questionDisplay = false;
    this.answerDisplay = false;
    this.questionNum = 0;
    this.difficulty = 0;
    this.score = 0;
    this.timer = 2;
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
