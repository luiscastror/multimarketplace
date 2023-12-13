import { Injectable, Inject } from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { MainService } from "./main.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class Interceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        public MainService: MainService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.MainService.AuthService.getToken() ?? "";
        let request = req;
        if (token) {
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${token}`,
                },
            });
        }

        return next.handle(request).pipe(

            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    this.router.navigateByUrl('/login');
                }
                if (err.status === 403) {
                    this.router.navigateByUrl('/login');
                }
                return throwError(err);
            })
        );
    }
}