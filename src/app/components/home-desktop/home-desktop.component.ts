import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrl: './home-desktop.component.css'
})
export class HomeDesktopComponent {
  triviaAbout: boolean = false;
  reactionAbout: boolean = false;
  activityAbout: boolean = false;
  constructor(private router: Router){}
  redirect(route: string){
    this.router.navigateByUrl('/'+route)
  }

  showTriviaAbout(){
    this.triviaAbout = true;
  }

  hideTriviaAbout(){
    this.triviaAbout = false;
  }

  showReactionAbout(){
    this.reactionAbout = true;
  }

  hideReactionAbout(){
    this.reactionAbout = false;
  }

  showActivityAbout(){
    this.activityAbout = true;
  }

  hideActivityAbout(){
    this.activityAbout = false;
  }
}
