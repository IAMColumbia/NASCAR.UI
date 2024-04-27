import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LeaderboardService } from '../../../services/leaderboard.service';
import { User } from '../../../models/user';
import { LeaderBoardRequest } from '../../../models/leaderboard-request';

@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrl: './avatar-select.component.css'
})
export class AvatarSelectComponent {
  @Output() menu = new EventEmitter<boolean>();
  @Output() play = new EventEmitter<User>();

  AvatarSelect:boolean = false;
  started:boolean = false;
  instructions:boolean = false;
  Menu:boolean = true;
  showLoading:boolean = true;
  
  timeout: any;
  apiCallComplete: boolean = false;
  
  user: User = new User(0,"","",0);
  
  userID: number = 0;
  username: string = "";
  tempUsername: string ="";
  selectedAvatar: string = "../../../../assets/img/WhiteHelmet.svg";
  avatarList: string[] = [
    "../../../../assets/img/BlackHelmet.svg",
    "../../../../assets/img/BlueHelmet.svg",
    "../../../../assets/img/DarkBlueHelmet.svg",
    "../../../../assets/img/GrayHelmet.svg",
    "../../../../assets/img/GreenHelmet.svg",
    "../../../../assets/img/LightBlueHelmet.svg",
    "../../../../assets/img/LimeHelmet.svg",
    "../../../../assets/img/OrangeHelmet.svg",
    "../../../../assets/img/PinkHelmet.svg",
    "../../../../assets/img/PurpleHelmet.svg",
    "../../../../assets/img/RedHelmet.svg",
    "../../../../assets/img/TealHelmet.svg"
  ];
  
  ngOnInit(): void {
    try{
      let user = localStorage.getItem('user');
  
      this.user = JSON.parse(user!);
      this.intToAvatar(this.user.Avatar);
      this.username = this.user.Username;
      if(this.user.ID === 0){
        this.generateRandomUsername();
        //this.AvatarSelect = true; 
      }
      else{
        this.displayInstructions();
      }
      
    }
    catch{
        this.generateRandomUsername();
      
    }
  }
  
  constructor(private leaderboardService: LeaderboardService){
  }
  
  displayInstructions(): void{
    this.AvatarSelect = false;
    this.instructions = true;
    this.started = true;
  }

  displayMenu(): void{
    this.menu.emit(true);
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
  
  
    let number = Math.floor(Math.random() * (9999 - 1000) + 1000);
  
    let first = firstTerms[Math.floor(Math.random() * (26-0)+0)];
    let second = middleTerms[Math.floor(Math.random() * (39-0)+0)];
  
    this.tempUsername = first + second + number;
    
    this.leaderboardService.getUserByUsername(this.tempUsername).subscribe(res => {
      if(res.data != null){
        this.tempUsername = this.generateRandomUsername();
      }
      else{
        this.username = this.tempUsername;
        this.AvatarSelect = true;
      }
      });
    return this.tempUsername;
  }
  
  newUsername(){
    this.username = this.generateRandomUsername();
  }
  
  changeAvatar(nextAvatar: string){
    this.selectedAvatar = nextAvatar;
    console.log(this.selectedAvatar);
  }
  
  registerUser(){
    this.user = new User(this.userID, this.username, 'player', this.avatarToInt());
    localStorage.setItem('user', JSON.stringify(this.user));
    try{
      this.leaderboardService.insertUser(this.user).subscribe(res => {
        
        let temp:string = JSON.stringify(res);
    
        let response: any = JSON.parse(temp);
        console.log(response.data);
        if(response.data == undefined){
          this.user = new User(0, this.username, 'player', this.avatarToInt());
        
          localStorage.setItem('user', JSON.stringify(this.user));
        }
        else{
          this.user = new User(response.data, this.username, 'player', this.avatarToInt());
        
          localStorage.setItem('user', JSON.stringify(this.user));
        }
        this.play.emit(this.user);
      });
    }
    catch{
      ('Api call failed');
    }
    
    
  }
  
  avatarToInt(){
    switch(this.selectedAvatar){
      case "../../../../assets/img/WhiteHelmet.svg":{
        return 1;
      }
      case "../../../../assets/img/BlackHelmet.svg":{
        return 2;
      }
      case "../../../../assets/img/BlueHelmet.svg":{
        return 3;
      }
      case "../../../../assets/img/DarkBlueHelmet.svg":{
        return 4;
      }
      case "../../../../assets/img/GrayHelmet.svg":{
        return 5;
      }
      case "../../../../assets/img/GreenHelmet.svg":{
        return 6;
      }
      case "../../../../assets/img/LightBlueHelmet.svg":{
        return 7;
      }
      case "../../../../assets/img/LimeHelmet.svg":{
        return 8;
      }
      case "../../../../assets/img/OrangeHelmet.svg":{
        return 9;
      }
      case "../../../../assets/img/PinkHelmet.svg":{
        return 10;
      }
      case "../../../../assets/img/PurpleHelmet.svg":{
        return 11;
      }
      case "../../../../assets/img/RedHelmet.svg":{
        return 12;
      }
      case "../../../../assets/img/TealHelmet.svg":{
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
