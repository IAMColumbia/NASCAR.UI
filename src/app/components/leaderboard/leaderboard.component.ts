import { Component } from '@angular/core';
import { LeaderBoardRecord } from '../../models/leaderboard-record';
import { LeaderboardService } from '../../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  scores: any=[];
  constructor(private leaderboardService: LeaderboardService){}

  ngOnInit(): void{
    this.leaderboardService
    .getLeaderBoardRecords()
    .subscribe(res => {this.scores = res.scores});
  }
}
