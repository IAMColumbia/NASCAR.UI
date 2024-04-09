// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable, Injector } from "@angular/core";
// import { MatSnackBar } from "@angular/material/snack-bar";
// import { Router } from "@angular/router";
// import { Observable, catchError, of, throwError } from "rxjs";
// import { AuthService } from "./auth.service";

// @Injectable()
// export class Interceptor implements HttpInterceptor{

//     constructor(private inject: Injector, private router: Router, private _snackBar: MatSnackBar){}
//     ctr = 0;

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // return next.handle(req).pipe(catchError(x=>this.handleAuthError(x)));
//     }

//     private handleAuthError(err: HttpErrorResponse): Observable<any>{
//         // if(err && err.status === 401 && this.ctr != 1){
//         //     this.ctr++;
//         //     let service = this.inject.get(AuthService);
//         //     service.refreshToken().subscribe({
//         //         next: (x:any) => {
//         //             this._snackBar.open("Tokens refeshed, try again");
//         //             return of("We refreshed the token, try again.");
//         //         },
//         //         error: (err:any) => {
//         //             service.revokeToken().subscribe({
//         //                 next: (x:any) => {
//         //                     this.router.navigateByUrl('/login');
//         //                     return of(err.message);
//         //                 }
//         //             })
//         //         }
//         //     });
//         //     return of("Attempting to Refresh Tokens");
//         // }
//         // else{
//         //     this.ctr = 0;
//         //     return throwError(() => new Error("Non Authentication Error"));
//         // }
//     }
// }