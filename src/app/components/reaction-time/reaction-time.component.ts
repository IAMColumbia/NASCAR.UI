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
startTime: number = 0;
endTime: number = 0;
reactionTime: number = 0;

ngOnInit(): void {
}

startGame(): void{
  console.log('start game');
  this.started = true;
  setTimeout(()=>{
    console.log('display mid');
    this.showMid = true;
    setTimeout(()=>{
      console.log('display click');
      this.showMid = false;
      this.showClick = true;
      this.startTime = new Date().getTime();
    },Math.random() * 3000 + 1000)
  },Math.random() * 3000 + 1000);
}

fakeClick(){
  if(this.started && !this.showClick && !this.showMid){
    this.showMid = true;
  }
  else if(this.started && !this.showClick && this.showMid){
    this.showClick = true;
    this.showMid = false;
  }
}

realClick(){
  console.log(this.showClick)
  if(this.showClick === true){
    console.log('end game');
    this.endTime = new Date().getTime();
    this.reactionTime = this.endTime - this.startTime;
    this.finished = true;
  }
}

resetGame(){
  this.started = false;
  this.finished = false;
  this.showMid = false;
  this.showClick = false;
  this.startTime = 0;
  this.endTime = 0;
  this.reactionTime = 0;
}

displayLeaderBoard(){
  this.showLeaderBoard = true;
  console.log(this.showLeaderBoard);
  console.log(this.finished);
}

}
