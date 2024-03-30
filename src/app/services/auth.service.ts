import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = environment.apiUrl;
  private username = new BehaviorSubject<string>(localStorage.getItem('username')!);

  constructor(private httpClient: HttpClient) { }

  public signOutExternal = () => {
    localStorage.removeItem("token");
    console.log("token deleted");
  }

  LoginWithGoogle(credentials: string): Observable<any>{
    const header = new HttpHeaders().set('Content-type','application/json');
    return this.httpClient.post(this.path + "auth/LoginWithGoogle", JSON.stringify(credentials),{headers: header, withCredentials: true});
  }

  getClient(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + "GetColorList", {headers: header, withCredentials: true});
  }

  refreshToken(): Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + "RefreshToken", {headers: header, withCredentials: true});
  }

  revokeToken(): Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete(this.path + "RefreshToken/" + this.username.value, {headers: header, withCredentials: true});
  }

  saveToken(token:string){
    localStorage.setItem('token', token)
  }

  saveUsername(username:string){
    localStorage.setItem('username', username);
  }
}
