import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}
refresh(){
  this.router.navigate(['/reaction-game']).then(()=>{
    window.location.reload();
  });
  
}
}
