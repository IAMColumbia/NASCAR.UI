import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TriviaService } from '../../../services/trivia.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrl: './end-screen.component.css'
})
export class EndScreenComponent {
  @Input() questions: any = [];
  @Input() difficulty: number = 0;
  @Input() score: number = 0;
  @Output() nextLevel = new EventEmitter<boolean>();

  endRoundIndex: number = 6;
  card1: number = 1;
  card2: number = 2;
  card3: number = 3;
  card4: number = 4;
  card5: number = 5;
  card6: number = 6;

  ngOnInit(): void {
  } 

  constructor(){}

  NextLevel(){
    this.score = 0;
    this.difficulty = 0;
    this.endRoundIndex = 6;
    this.card1 = 1;
    this.card2 = 2;
    this.card3 = 3;
    this.card4 = 4;
    this.card5 = 5;
    this.card6 = 6;

    this.nextLevel.emit(true);
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
