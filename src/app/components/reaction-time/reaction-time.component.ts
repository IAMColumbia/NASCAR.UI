import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaction-time',
  templateUrl: './reaction-time.component.html',
  styleUrl: './reaction-time.component.css'
})
export class ReactionTimeComponent implements OnInit{
started:boolean = false;
finished:boolean = false;
showMid:boolean = false;
showClick:boolean = false;
showLeaderBoard:boolean = false;
tooSoon:boolean = false;
instructions:boolean = false;

startTime: number = 0;
endTime: number = 0;
reactionTime: number = 0;

ngOnInit(): void {
}

displayInstructions(): void{
  this.instructions = true;
  this.started = true;
}

startGame(): void{
  this.instructions = false;
  setTimeout(()=>{
    if(!this.tooSoon){
      this.showMid = true;
      setTimeout(()=>{
      if(!this.tooSoon){
        this.showMid = false;
        this.showClick = true;
        this.startTime = new Date().getTime();
      }
      },Math.random() * 3000 + 1000)
    }
  },Math.random() * 3000 + 1000);
}

realClick(){
  console.log(this.showClick)
  if(this.showClick === true){
    console.log('end game');
    this.endTime = new Date().getTime();
    this.reactionTime = this.endTime - this.startTime;
    this.finished = true;
  }
  else{
    console.log('Too Soon')
    this.tooSoon = true;
  }

}

resetGame(){
  this.started = true;
  this.finished = false;
  this.showMid = false;
  this.showClick = false;
  this.tooSoon = false;
  this.startTime = 0;
  this.endTime = 0;
  this.reactionTime = 0;
  this.startGame();
}

displayLeaderBoard(){
  this.showLeaderBoard = true;
}

}
