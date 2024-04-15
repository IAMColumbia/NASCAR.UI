import { Component } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  scores: any=[];
  constructor(private leaderboardService: LeaderboardService, private router: Router){}

  ngOnInit(): void{
    this.leaderboardService
    .getLeaderBoardRecords()
    .subscribe(res => {this.scores = res.scores});
  }

  playGame(){
    window.location.reload();
  }

  redirect(route: string){
    this.router.navigateByUrl('/'+route)
  }
}
