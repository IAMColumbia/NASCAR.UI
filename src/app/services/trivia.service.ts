import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class TriviaService{

    constructor(private http: HttpClient){}

    GetLevelOneQuestions(){
        return this.http.get<any>("assets/level-1-questions.json");
    }

    GetLevelTwoQuestions(){
        return this.http.get<any>("assets/level-2-questions.json");
    }

    GetLevelThreeQuestions(){
        return this.http.get<any>("assets/level-3-questions.json");
    }
}