import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { TriviaComponent } from './components/trivia/trivia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trivia', component: TriviaComponent},
  {path: 'reaction-game', component:ReactionTimeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
