import { Component } from '@angular/core';
import { LeaderBoardRecord } from '../../models/leaderboard-record';
import { LeaderboardService } from '../../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  records: LeaderBoardRecord[]=[];
  constructor(private leaderboardService: LeaderboardService){}

  ngOnInit(): void{
    this.leaderboardService
    .getLeaderBoardRecords()
    .subscribe((result: LeaderBoardRecord[]) => (this.records = result));
  }
}
