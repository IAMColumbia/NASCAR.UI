import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { TeamComponent } from './components/team/team.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ProcessComponent } from './components/process/process.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trivia', component: TriviaComponent},
  {path: 'reaction-game', component:ReactionTimeComponent},
  {path: 'team', component:TeamComponent},
  {path: 'activity', component:ActivityComponent},
  {path: 'process', component:ProcessComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
