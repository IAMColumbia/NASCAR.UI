import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrl: './home-mobile.component.css'
})
export class HomeMobileComponent {
  constructor(private router: Router){}

  redirect(route: string){
    this.router.navigateByUrl('/'+route)
  }
}
