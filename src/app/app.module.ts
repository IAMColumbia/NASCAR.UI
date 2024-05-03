import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TriviaComponent } from './components/trivia/trivia.component';
import { HomeMobileComponent } from './components/home-mobile/home-mobile.component';
import { HomeDesktopComponent } from './components/home-desktop/home-desktop.component';
import { TriviaMenuComponent } from './components/trivia/trivia-menu/trivia-menu.component';
import { TeamComponent } from './components/team/team.component';
import { TriviaPlayComponent } from './components/trivia/trivia-play/trivia-play.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { httpInterceptProviders } from './interceptors';
import { AvatarSelectComponent } from './components/reaction-time/avatar-select/avatar-select.component';
import { ReactionMenuComponent } from './components/reaction-time/reaction-menu/reaction-menu.component';
import { EndScreenComponent } from './components/trivia/end-screen/end-screen.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ProcessComponent } from './components/process/process.component';
import { ReactionEndComponent } from './components/reaction-time/reaction-end/reaction-end.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReactionTimeComponent,
    LeaderboardComponent,
    TriviaComponent,
    HomeMobileComponent,
    HomeDesktopComponent,
    TriviaMenuComponent,
    TeamComponent,
    TriviaPlayComponent,
    ActivityComponent,
    SpinnerComponent,
    AvatarSelectComponent,
    ReactionMenuComponent,
    EndScreenComponent,
    ProcessComponent,
    ReactionEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
