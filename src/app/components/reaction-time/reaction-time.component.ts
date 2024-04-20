import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaction-time',
  templateUrl: './reaction-time.component.html',
  styleUrl: './reaction-time.component.css'
})
export class ReactionTimeComponent implements OnInit{
started:boolean = false;
finished:boolean = false;
finishedGood:boolean = false;
finishedGoodNas:boolean = false;
finishedBad:boolean = false;
DriverCard:boolean = false;
showMid:boolean = false;
showClick:boolean = false;
showLeaderBoard:boolean = false;
tooSoon:boolean = false;
instructions:boolean = false;

timeout: any;

startTime: number = 0;
endTime: number = 0;
reactionTime: number = 0;

ngOnInit(): void {
}

displayInstructions(): void{
  this.instructions = true;
  this.started = true;
}

DisplayDriver(): void{
  if(this.finishedGoodNas = true)
    {
      this.finishedGoodNas = false;
      this.DriverCard = true;
    }
  
}

DisplayPlayer(): void{
   
      this.finishedGoodNas = true;
      this.DriverCard = false;
    
  
}

startGame(): void{
  this.instructions = false;
  this.timeout = setTimeout(()=>{
    if(!this.tooSoon){
      this.midTimer();
      
    }
  },Math.random() * 3000 + 1000);
}

midTimer(){
      this.showMid = true;
      this.timeout = setTimeout(()=>{
      if(!this.tooSoon){
        this.showMid = false;
        this.showClick = true;
        this.startTime = new Date().getTime();
      }
    },Math.random() * 3000 + 1000)
}

realClick(){
  console.log(this.showClick)
  if(this.showClick === true){
    console.log('end game');
    //this.finished = true;
    this.endTime = new Date().getTime();
    this.reactionTime = this.endTime - this.startTime;
    if (this.reactionTime <= 1000 && this.reactionTime > 500)
      {
        this.finishedGood = true;
        this.started = false;
      }
    else if (this.reactionTime <= 500)
        {
          this.finishedGoodNas = true;
          this.started = false;
        }
    else if (this.reactionTime > 1000)
      {
        this.finishedBad = true;
        this.started = false;
      }
  }
  else{
    console.log('Too Soon')
    this.tooSoon = true;
  }

}

resetGame(){
  clearTimeout(this.timeout);
  this.started = true;
  this.finished = false;
  this.finishedBad = false;
  this.finishedGood = false;
  this.finishedGoodNas = false;
  this.DriverCard = false;
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
