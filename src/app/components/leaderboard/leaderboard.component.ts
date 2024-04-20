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
}
