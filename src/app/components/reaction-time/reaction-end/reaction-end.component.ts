import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../models/user';
import { LeaderboardService } from '../../../services/leaderboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reaction-end',
  templateUrl: './reaction-end.component.html',
  styleUrl: './reaction-end.component.css'
})
export class ReactionEndComponent {
  @Input() user: User = new User(0,"","",0);
  @Input() reactionTime: number = 0;
  @Output() leaderboard = new EventEmitter<boolean>();
  @Output() playAgain = new EventEmitter<boolean>();
  finished:boolean = false;
  finishedGood:boolean = false;
  finishedGoodNas:boolean = false;
  finishedBad:boolean = false;
  DriverCard:boolean = false;
  showLeaderBoard:boolean = false;

  drivers: any = [];
  driverIndex: number = 0;

  ngOnInit(): void {
  
    this.service.GetNascarDrivers()
    .subscribe(res => {
      console.log(res);
      this.drivers = res.drivers;
      this.determineScoreRanking();
      this.finished = true;
    });
  }
  
  constructor(private service: LeaderboardService, private router: Router){
  }

  redirect(route: string){
    this.router.navigateByUrl('/'+route)
  }
  
  DisplayDriver(): void{
    if(!this.DriverCard){
      this.DriverCard = true;
    }
    else{
      this.DriverCard = false;
    }
    
  }
  
  resetGame(){
    this.finished = false;
    this.finishedBad = false;
    this.finishedGood = false;
    this.finishedGoodNas = false;
    this.DriverCard = false;
    this.reactionTime = 0;
    this.playAgain.emit(true);
  }
  
  displayLeaderBoard(){
    this.leaderboard.emit(true);
  }
  
  intToAvatar(avatar: number){
    switch(avatar){
      case 1:{
        return "../../../../assets/img/player-avatars/WhiteHelmet.svg";
        
      }
      case 2:{
        return "../../../../assets/img/player-avatars/BlackHelmet.svg";
        
      }
      case 3:{
        return "../../../../assets/img/player-avatars/BlueHelmet.svg";
        
      }
      case 4:{
        return "../../../../assets/img/player-avatars/DarkBlueHelmet.svg";
        
      }
      case 5:{
        return "../../../../assets/img/player-avatars/GrayHelmet.svg";
        
      }
      case 6:{
        return "../../../../assets/img/player-avatars/GreenHelmet.svg";
        
      }
      case 7:{
        return "../../../../assets/img/player-avatars/LightBlueHelmet.svg";
        
      }
      case 8:{
        return "../../../../assets/img/player-avatars/LimeHelmet.svg";
        
      }
      case 9:{
        return "../../../../assets/img/player-avatars/OrangeHelmet.svg";
        
      }
      case 10:{
        return "../../../../assets/img/player-avatars/PinkHelmet.svg";
        
      }
      case 11:{
        return "../../../../assets/img/player-avatars/PurpleHelmet.svg";
        
      }
      case 12:{
        return "../../../../assets/img/player-avatars/RedHelmet.svg";
        
      }
      case 13:{
        return "../../../../assets/img/player-avatars/TealHelmet.svg";
        
      }
    }

    return "../../../../assets/img/player-avatars/WhiteHelmet.svg";
  }
  determineScoreRanking(){

    let faster = this.fasterThanDriver();
    if(faster){
      this.driverIndex--;
      this.finishedGoodNas = true;
    }
    else if (this.reactionTime <= 1000 && this.reactionTime > 311)
    {
      this.finishedGood = true;
    }
    else if (this.reactionTime > 1000)
    {
      this.finishedBad = true;
    }
  }

  fasterThanDriver(){
    for(this.driverIndex = 0; this.driverIndex < 6; this.driverIndex++){
      if(this.reactionTime >= this.drivers[this.driverIndex].score){
        if(this.driverIndex == 0){
          return false;
        }
        else{
          return true;
        }
      }
    }
    this.driverIndex;
    return true;
  }
}
