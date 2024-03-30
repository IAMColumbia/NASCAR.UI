import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private clientID = environment.clientID;

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: AuthService,
    private _ngZone: NgZone){}

  ngOnInit(): void {
    console.log(this.clientID);
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {

      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientID,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });

      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("button-div"),{type: "standard", theme: "filled_blue", size: "large", shape: "rectangular", width: "900px", logo_alignment: "left"}
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification)=>{});
    }
  }

  async handleCredentialResponse(response: CredentialResponse){
    //debugger;
    await this.service.LoginWithGoogle(response.credential).subscribe(
      (x:any) => {
        //debugger;
        //localStorage.setItem("token", x.token);
        this._ngZone.run(()=> {
          this.router.navigate(['/logout']);
        })},
        (error:any) => {
          debugger
          console.log(error);
        }
    );
  }
}
