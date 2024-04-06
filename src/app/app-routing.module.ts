import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TriviaComponent } from './components/trivia/trivia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trivia', component: TriviaComponent},
  {path: 'reaction-game', component:ReactionTimeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
