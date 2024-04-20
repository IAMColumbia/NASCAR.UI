import { Injectable } from '@angular/core';
import { LeaderBoardRecord } from '../models/leaderboard-record';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private url = "Leaderboard";

  constructor(private http: HttpClient) { }

  public getLeaderBoardRecords(index: number) {
    return this.http.get<any>(`${environment.apiUrl}/api/leaderboard/${index}`);
  }
}
