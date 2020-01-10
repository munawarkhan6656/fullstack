import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { switchMap, filter, take, catchError, finalize } from 'rxjs/operators';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent
} from '@angular/common/http';

// Services
import { ToasterService } from '../services/toaster.service';
import { LoaderService } from '../services/loader.service';

// Interfaces
import { Response, Token } from '../../shared/interfaces';

// Constatns
import { messages, appConstants } from '../../shared/constants';
import { JwtService } from '../services/jwt.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private toasterService: ToasterService,
    private loaderService: LoaderService,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private jwtHelperService: JwtService,
    private router: Router,
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {


    const accessToken = this.localStorageService.getObject(
      appConstants.localStorage.accessToken
    );
    // const token = accessToken !== null ? accessToken.token : null;
    this.loaderService.show();
    return next.handle(this.appendHeaderInfo(request, accessToken))
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            this.loaderService.hide();
            switch (err.status) {
              case 401:
                return this.handle401Error(request, next);
              case 400:
                if (err.error && err.error.errors) {
                  for (const eachError of err.error.errors) {
                    this.toasterService.error(eachError.message);
                  }

                  return throwError(err);
                }
                if (err.error) {
                  this.toasterService.error(err.error.Message);
                  return throwError(err);
                }
                this.toasterService.error(err.message);
                return throwError(err);
              case 404:
                this.toasterService.error(err.message);
                return throwError(err);
              case 500:
                if (err.error) {
                  this.toasterService.error(err.error.Message);
                  return;
                }
                this.toasterService.error(messages.serverError);
                return throwError(err);
              case 504:
                this.toasterService.error(messages.weighmentError);
                return throwError(err);
              default:
                return throwError(err);
            }
          } else {
            return throwError(err);
          }
        }), finalize(() => {
          this.loaderService.hide();
        }));
  }

  private appendHeaderInfo(request: HttpRequest<any>, token: string): HttpRequest<any> {

    if (request.url.includes('/login') || request.url.includes('RefreshToken')) {
      return request.clone({
        setHeaders: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        }
      });
    }
    return request.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Authorization: `Bearer ${token}`,
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

    if (!this.isRefreshing) {
      this.isRefreshing = true;
      const refreshToken = this.localStorageService.getObject(
        appConstants.localStorage.refreshToken
      );

      this.refreshTokenSubject.next(null);

      return this.jwtHelperService.getAccessTokenByRefreshToken(refreshToken)
        .pipe(
          switchMap((res: Token) => {
            if (res) {
              const token = res;
              this.isRefreshing = false;
              this.refreshTokenSubject.next(token.access_token);
              this.localStorageService.setObject(appConstants.localStorage.refreshToken, token.refresh_token);
              this.localStorageService.setObject(appConstants.localStorage.accessToken, token.access_token);
              return next.handle(this.appendHeaderInfo(request, res.access_token));
            }
            this.localStorageService.clear();
            this.router.navigate(['/auth', 'login']);

          }),
          catchError(err => {
            this.localStorageService.clear();
            this.router.navigate(['/auth', 'login']);
            return null;
          }),
          finalize(() => {
            this.isRefreshing = false;
          })
        );
    } else {
      this.isRefreshing = false;

      return this.refreshTokenSubject
        .pipe(filter(token => token != null),
          take(1),
          switchMap(token => {
            return next.handle(this.appendHeaderInfo(request, token));
          }));
    }
  }
}
