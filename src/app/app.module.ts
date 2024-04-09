import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReactionTimeComponent } from './components/reaction-time/reaction-time.component';
import { LeaderboardComponent } from './components/leaderboard-basic/leaderboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MaterialModule } from './material/material-module';
//import { Interceptor } from './services/interceptor';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { TriviaComponent } from './components/trivia/trivia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ReactionTimeComponent,
    LeaderboardComponent,
    LoginComponent,
    LogoutComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [/* {
    provide: HTTP_INTERCEPTORS,
    //useClass: Interceptor,
    multi: true
  }, */
    provideAnimationsAsync(),
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
