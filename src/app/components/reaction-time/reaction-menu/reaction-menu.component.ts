import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reaction-menu',
  templateUrl: './reaction-menu.component.html',
  styleUrl: './reaction-menu.component.css'
})
export class ReactionMenuComponent {
@Output() leaderboard = new EventEmitter<boolean>();
@Output() displayAvatarMenu = new EventEmitter<boolean>();

  displayLeaderBoard(){
    this.leaderboard.emit(true);
  }
  displayAvatarSelect(){
    
    this.displayAvatarMenu.emit(true);
  }
}
