import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

// Service
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return true;
  }
}
