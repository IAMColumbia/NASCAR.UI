import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { User } from '../../models/user';
import { LeaderBoardRequest } from '../../models/leaderboard-request';

@Component({
  selector: 'app-reaction-time',
  templateUrl: './reaction-time.component.html',
  styleUrl: './reaction-time.component.css'
})
export class ReactionTimeComponent implements OnInit{
AvatarSelect:boolean = false;
started:boolean = false;
finished:boolean = false;
showMid:boolean = false;
showClick:boolean = false;
showLeaderBoard:boolean = false;
tooSoon:boolean = false;
instructions:boolean = false;
Menu:boolean = true;
showLoading:boolean = true;

timeout: any;
apiCallComplete: boolean = false;

startTime: number = 0;
endTime: number = 0;
reactionTime: number = 0;

user: User = new User(0,"","",0);

ngOnInit(): void {
  
}

constructor(private leaderboardService: LeaderboardService){
}

setUser(user:User){
  this.user = user;
  console.log(this.user);
  this.displayInstructions();
}

displayInstructions(): void{
  this.AvatarSelect = false;
  this.instructions = true;
  this.started = true;
}

displayAvatarSelect(event: boolean){
  try{
    let user = localStorage.getItem('user');

    this.user = JSON.parse(user!);
    if(this.user.ID === 0){
      this.AvatarSelect = event;
    }
    else{
      this.displayInstructions();
    }
    
  }
  catch{
      this.AvatarSelect = event;
    
  }
  
}

displayMenu(output: boolean): void{
  this.AvatarSelect = !output;
  this.Menu = output;
}

startGame(): void{
  this.instructions = false;
  this.AvatarSelect = false;
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
  if(this.showClick === true){
    this.finished = true;
    this.endTime = new Date().getTime();
    this.reactionTime = this.endTime - this.startTime;
    this.started = false;
    let user = localStorage.getItem('user');
    let test = JSON.parse(user!);
    let record: LeaderBoardRequest = new LeaderBoardRequest();
    record.Score = this.reactionTime;
    record.UserID = test.ID;
    try{
      this.leaderboardService.insertLearboard(record);
    }
    catch{
      ('Api called failed');
    }
  }
  else{
    ('Too Soon')
    this.tooSoon = true;
  }

}

resetGame(){
  clearTimeout(this.timeout);
  this.started = true;
  this.AvatarSelect = false;
  this.finished = false;
  this.showMid = false;
  this.showClick = false;
  this.tooSoon = false;
  this.startTime = 0;
  this.endTime = 0;
  this.reactionTime = 0;
  this.startGame();
}

displayLeaderBoard(event: boolean){
  this.finished = !event;
  this.showLeaderBoard = event;
}

}
