import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { User } from '../../models/user';
import { LeaderBoardRecord } from '../../models/leaderboard-record';
import { ResponseDto } from '../../models/response';
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
finishedGood:boolean = false;
finishedGoodNas:boolean = false;
finishedBad:boolean = false;
DriverCard:boolean = false;
showMid:boolean = false;
showClick:boolean = false;
showLeaderBoard:boolean = false;
tooSoon:boolean = false;
instructions:boolean = false;
Menu:boolean = true;

timeout: any;
apiCallComplete: boolean = false;

startTime: number = 0;
endTime: number = 0;
reactionTime: number = 0;

user: User = new User(0,"","",0);

userID: number = 0;
username: string = "";
selectedAvatar: string = "../../../assets/img/WhiteHelmet.svg";
avatarList: string[] = [
  "../../../assets/img/BlackHelmet.svg",
  "../../../assets/img/BlueHelmet.svg",
  "../../../assets/img/DarkBlueHelmet.svg",
  "../../../assets/img/GrayHelmet.svg",
  "../../../assets/img/GreenHelmet.svg",
  "../../../assets/img/LightBlueHelmet.svg",
  "../../../assets/img/LimeHelmet.svg",
  "../../../assets/img/OrangeHelmet.svg",
  "../../../assets/img/PinkHelmet.svg",
  "../../../assets/img/PurpleHelmet.svg",
  "../../../assets/img/RedHelmet.svg",
  "../../../assets/img/TealHelmet.svg"
];

ngOnInit(): void {
  
}

constructor(private leaderboardService: LeaderboardService){
}

displayInstructions(): void{
  this.AvatarSelect = false;
  this.instructions = true;
  this.started = true;
}

displayAvatarSelect(){
  try{
    let user = localStorage.getItem('user');

    this.user = JSON.parse(user!);
    this.intToAvatar(this.user.Avatar);
    this.username = this.user.Username;
    this.displayInstructions();
  }
  catch{
      this.username = this.generateRandomUsername();
      this.AvatarSelect = true; 
    
  }

  
}

displayMenu(): void{
  this.AvatarSelect = false;
  this.Menu = true;
}

DisplayDriver(): void{
  if(this.finishedGoodNas = true)
    {
      this.finishedGoodNas = false;
      this.finished = false;
      this.DriverCard = true;
    }
  
}
DisplayPlayer(): void{
   
      this.finishedGoodNas = true;
      this.DriverCard = false;
      this.finished=true;
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

    let user = localStorage.getItem('user');
    let test = JSON.parse(user!);
    let record: LeaderBoardRequest = new LeaderBoardRequest();
    record.Score = this.reactionTime;
    record.UserID = test.ID;
    this.leaderboardService.insertLearboard(record)
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
  this.AvatarSelect = false;
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
  this.finished = false;
  this.showLeaderBoard = true;
}

generateRandomUsername(){
  const middleTerms = [
    "Boost",
    "Brake",
    "Burn",
    "Chase",
    "Check",
    "Crew",
    "Curve",
    "Dash",
    "Drive",
    "Draft",
    "Finish",
    "Flag",
    "Fuel",
    "Gear",
    "Glide",
    "Grid",
    "Grit",
    "Lane",
    "Lap",
    "Lead",
    "Loop",
    "Pace",
    "Pit",
    "Pitcrew",
    "Pitstop",
    "Pole",
    "Race",
    "Rev",
    "Shift",
    "Spinner",
    "Spin",
    "Speed",
    "Start",
    "Tire",
    "Track",
    "Turn",
    "Victory",
    "Win",
    "Wheel"
  ]

  const firstTerms = [
    "Bold",
    "Bright",
    "Brave",
    "Calm",
    "Cheery",
    "Clear",
    "Clever",
    "Cool",
    "Clever",
    "Fair",
    "Fresh",
    "Fun",
    "Good",
    "Joyful",
    "Kind",
    "Lively",
    "Lucky",
    "Merry",
    "Rich",
    "Safe",
    "Sharp",
    "Smart",
    "Sweet",
    "Swift",
    "Sunny",
    "True",
    "Wise"
  ]
  
  let name = "";

  let number = Math.floor(Math.random() * (9999 - 1000) + 1000);

  let first = firstTerms[Math.floor(Math.random() * (26-0)+0)];
  let second = middleTerms[Math.floor(Math.random() * (39-0)+0)];

  name = first + second + number;

  this.leaderboardService.getUserByUsername(name).subscribe(res => {console.log(res.data)});
  
  return name.toString();
}

newUsername(){
  this.username = this.generateRandomUsername();
}

changeAvatar(nextAvatar: string){
  this.selectedAvatar = nextAvatar;
}

registerUser(){
  this.user = new User(this.userID, this.username, 'player', this.avatarToInt());

  this.leaderboardService.insertUser(this.user).subscribe(res => {
    console.log(res);
    let temp:string = JSON.stringify(res);

    let response: any = JSON.parse(temp);

    this.user = new User(response.data, this.username, 'player', this.avatarToInt());
    
    localStorage.setItem('user', JSON.stringify(this.user));
  });
  
  this.displayInstructions();
}

avatarToInt(){
  switch(this.selectedAvatar){
    case "../../../assets/img/WhiteHelmet.svg":{
      return 1;
    }
    case "../../../assets/img/BlackHelmet.svg":{
      return 2;
    }
    case "../../../assets/img/BlueHelmet.svg":{
      return 3;
    }
    case "../../../assets/img/DarkBlueHelmet.svg":{
      return 4;
    }
    case "../../../assets/img/GrayHelmet.svg":{
      return 5;
    }
    case "../../../assets/img/GreenHelmet.svg":{
      return 6;
    }
    case "../../../assets/img/LightBlueHelmet.svg":{
      return 7;
    }
    case "../../../assets/img/LimeHelmet.svg":{
      return 8;
    }
    case "../../../assets/img/OrangeHelmet.svg":{
      return 9;
    }
    case "../../../assets/img/PinkHelmet.svg":{
      return 10;
    }
    case "../../../assets/img/PurpleHelmet.svg":{
      return 11;
    }
    case "../../../assets/img/RedHelmet.svg":{
      return 12;
    }
    case "../../../assets/img/TealHelmet.svg":{
      return 13;
    }
  }
  return 0;
}

intToAvatar(avatar: number){
  switch(avatar){
    case 1:{
      this.selectedAvatar = "../../../assets/img/WhiteHelmet.svg";
      break;
    }
    case 2:{
      this.selectedAvatar = "../../../assets/img/BlackHelmet.svg";
      break;
    }
    case 3:{
      this.selectedAvatar = "../../../assets/img/BlueHelmet.svg";
      break;
    }
    case 4:{
      this.selectedAvatar = "../../../assets/img/DarkBlueHelmet.svg";
      break;
    }
    case 5:{
      this.selectedAvatar = "../../../assets/img/GrayHelmet.svg";
      break;
    }
    case 6:{
      this.selectedAvatar = "../../../assets/img/GreenHelmet.svg";
      break;
    }
    case 7:{
      this.selectedAvatar = "../../../assets/img/LightBlueHelmet.svg";
      break;
    }
    case 8:{
      this.selectedAvatar = "../../../assets/img/LimeHelmet.svg";
      break;
    }
    case 9:{
      this.selectedAvatar = "../../../assets/img/OrangeHelmet.svg";
      break;
    }
    case 10:{
      this.selectedAvatar = "../../../assets/img/PinkHelmet.svg";
      break;
    }
    case 11:{
      this.selectedAvatar = "../../../assets/img/PurpleHelmet.svg";
      break;
    }
    case 12:{
      this.selectedAvatar = "../../../assets/img/RedHelmet.svg";
      break;
    }
    case 13:{
      this.selectedAvatar = "../../../assets/img/TealHelmet.svg";
      break;
    }
  }
}

}
