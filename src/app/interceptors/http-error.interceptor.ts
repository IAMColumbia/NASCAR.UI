import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";
import { Observable, tap } from "rxjs";

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