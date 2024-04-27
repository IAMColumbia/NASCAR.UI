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
        return "../../../assets/img/WhiteHelmet.svg";
        
      }
      case 2:{
        return "../../../assets/img/BlackHelmet.svg";
        
      }
      case 3:{
        return "../../../assets/img/BlueHelmet.svg";
        
      }
      case 4:{
        return "../../../assets/img/DarkBlueHelmet.svg";
        
      }
      case 5:{
        return "../../../assets/img/GrayHelmet.svg";
        
      }
      case 6:{
        return "../../../assets/img/GreenHelmet.svg";
        
      }
      case 7:{
        return "../../../assets/img/LightBlueHelmet.svg";
        
      }
      case 8:{
        return "../../../assets/img/LimeHelmet.svg";
        
      }
      case 9:{
        return "../../../assets/img/OrangeHelmet.svg";
        
      }
      case 10:{
        return "../../../assets/img/PinkHelmet.svg";
        
      }
      case 11:{
        return "../../../assets/img/PurpleHelmet.svg";
        
      }
      case 12:{
        return "../../../assets/img/RedHelmet.svg";
      }
      case 13:{
        return "../../../assets/img/TealHelmet.svg";
      }
    }
    return "../../../assets/img/WhiteHelmet.svg";
  }
}
