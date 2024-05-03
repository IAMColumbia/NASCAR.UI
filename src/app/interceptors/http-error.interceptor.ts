import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";
import { Observable, catchError, tap, of } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{
    constructor(private spinnerService: SpinnerService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.spinnerService.requestStarted();
        return this.handler(next, request);
    }

    handler(next: HttpHandler, request: HttpRequest<any>){
        return next.handle(request)
            .pipe( 
                catchError((err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                        // A client-side or network error occurred. Handle it accordingly.
                        console.error('An error occurred:', err.error.message);
                      } else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
                      }
              
                      // ...optionally return a default fallback value so app can continue (pick one)
                      // which could be a default value (which has to be a HttpResponse here)
                      // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
                      // or simply an empty observable
                      this.spinnerService.requestEnded();
                      return of(new HttpResponse({body: [{data: null}]}));
                }),
                tap( 
                    (event) => {
                        if(event instanceof HttpResponse){
                            this.spinnerService.requestEnded();
                        }
                    },
                    (error: HttpErrorResponse) => {
                        this.spinnerService.requestEnded();
                        throw error;
                    }
                ),
            );
    }
}