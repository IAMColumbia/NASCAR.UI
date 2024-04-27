import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//import { Interceptor } from './services/interceptor';
import { TriviaComponent } from './components/trivia/trivia.component';
import { HomeMobileComponent } from './components/home-mobile/home-mobile.component';
import { HomeDesktopComponent } from './components/home-desktop/home-desktop.component';
import { TriviaMenuComponent } from './components/trivia/trivia-menu/trivia-menu.component';
import { TriviaPlayComponent } from './components/trivia/trivia-play/trivia-play.component';

import { ActivityComponent } from './components/activity/activity.component';


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
    TriviaPlayComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
