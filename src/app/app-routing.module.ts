import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { ActivityComponent } from './components/activity/activity.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trivia', component: TriviaComponent},
  {path: 'reaction-game', component:ReactionTimeComponent},
  {path: 'activity', component:ActivityComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
