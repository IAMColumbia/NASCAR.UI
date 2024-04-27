import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from '../models/user';
import { LeaderBoardRecord } from '../models/leaderboard-record';
import { Observable, map } from 'rxjs';
import { ResponseDto } from '../models/response';
import { LeaderBoardRequest } from '../models/leaderboard-request';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private url = "Leaderboard";

  constructor(private http: HttpClient) { }

  public getLeaderBoardRecords(index: number) {
    return this.http.get<any>(`${environment.apiUrl}/api/leaderboard/${index}`);
  }

  public insertUser(newUser: User): Observable<ResponseDto>{
    return this.http.post(`${environment.apiUrl}/api/user/`, newUser);
  }

  public getUserByUsername(username: string) {
    return this.http.get<any>(`${environment.apiUrl}/api/user/${username}`);
  }

  public insertLearboard(user: LeaderBoardRequest){
    this.http.post(`${environment.apiUrl}/api/leaderboard/`, user).subscribe();
  }
}
