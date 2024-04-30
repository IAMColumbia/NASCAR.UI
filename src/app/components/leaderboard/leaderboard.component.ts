import { Component } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  scores: any = [];
  records: any=[];
  index: number = 0;

  avatarList: string[] = [
    "../../../assets/img/player-avatars/BlackHelmet.svg",
    "../../../assets/img/player-avatars/BlueHelmet.svg",
    "../../../assets/img/player-avatars/DarkBlueHelmet.svg",
    "../../../assets/img/player-avatars/GrayHelmet.svg",
    "../../../assets/img/player-avatars/GreenHelmet.svg",
    "../../../assets/img/player-avatars/LightBlueHelmet.svg",
    "../../../assets/img/player-avatars/LimeHelmet.svg",
    "../../../assets/img/player-avatars/OrangeHelmet.svg",
    "../../../assets/img/player-avatars/PinkHelmet.svg",
    "../../../assets/img/player-avatars/PurpleHelmet.svg",
    "../../../assets/img/player-avatars/RedHelmet.svg",
    "../../../assets/img/player-avatars/TealHelmet.svg"
  ];

  constructor(private leaderboardService: LeaderboardService, private router: Router){}

  ngOnInit(): void{
    this.leaderboardService
    .getLeaderBoardRecords(this.index)
    .subscribe(res => {this.scores = res.data});
    console.log(this.scores);
  }

  playGame(){
    window.location.reload();
  }

  redirect(route: string){
    this.router.navigateByUrl('/'+route)
  }

  async nextPage(){
    this.index++;
    await this.leaderboardService
    .getLeaderBoardRecords(this.index)
    .subscribe(res => {this.scores = res.data});
    if(this.scores.length < 5){
      this.index--;
      await this.leaderboardService
      .getLeaderBoardRecords(this.index)
      .subscribe(res => {this.scores = res.data});
    }
  }

  previousPage(){
    if(this.index != 0){
      this.index--;
      this.leaderboardService
    .getLeaderBoardRecords(this.index)
    .subscribe(res => {this.scores = res.data});
    }
  }

  intToAvatar(avatar: number){
    console.log(avatar)
    switch(avatar){
      case 1:{
        return "../../../assets/img/player-avatars/WhiteHelmet.svg";
        
      }
      case 2:{
        return "../../../assets/img/player-avatars/BlackHelmet.svg";
        
      }
      case 3:{
        return "../../../assets/img/player-avatars/BlueHelmet.svg";
        
      }
      case 4:{
        return "../../../assets/img/player-avatars/DarkBlueHelmet.svg";
        
      }
      case 5:{
        return "../../../assets/img/player-avatars/GrayHelmet.svg";
        
      }
      case 6:{
        return "../../../assets/img/player-avatars/GreenHelmet.svg";
        
      }
      case 7:{
        return "../../../assets/img/player-avatars/LightBlueHelmet.svg";
        
      }
      case 8:{
        return "../../../assets/img/player-avatars/LimeHelmet.svg";
        
      }
      case 9:{
        return "../../../assets/img/player-avatars/OrangeHelmet.svg";
        
      }
      case 10:{
        return "../../../assets/img/player-avatars/PinkHelmet.svg";
        
      }
      case 11:{
        return "../../../assets/img/player-avatars/PurpleHelmet.svg";
        
      }
      case 12:{
        return "../../../assets/img/player-avatars/RedHelmet.svg";
      }
      case 13:{
        return "../../../assets/img/player-avatars/TealHelmet.svg";
      }

      case 20:{
        return "../../../assets/img/nascar-avatars/suarez-avatar.png"
        
      }
      case 21:{
        return "../../../assets/img/nascar-avatars/wallace-avatar.png"
        
      }
      case 22:{
        return "../../../assets/img/nascar-avatars/blaney-avatar.png"
        
      }
      case 23:{
        return "../../../assets/img/nascar-avatars/lajoie-avatar.png"
        
      }
      case 24:{
        return "../../../assets/img/nascar-avatars/reddick-avatar.png"
      }
      case 25:{
        return "../../../assets/img/nascar-avatars/cindric-avatar.png"
      }
    }
    return "../../../assets/img/player-avatars/WhiteHelmet.svg";
  }
}
