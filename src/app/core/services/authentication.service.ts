// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import { Token, Response, UserLogin, GroupLine } from '../../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(payload: UserLogin): Promise<any> {
    return this.httpClient.post<any>('/api/v1/Account', payload).toPromise();
  }

  logOut(): Observable<any> | Promise<any> {
    return this.httpClient.get('/api/v1/Account/Logout').toPromise();
  }
}
