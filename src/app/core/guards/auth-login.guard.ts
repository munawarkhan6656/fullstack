import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { appConstants } from 'src/app/shared/constants/appConstants';

@Injectable()
export class AuthLoginGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private route: Router
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const isLoggedIn = await this.localStorageService.getObject(appConstants.localStorage.accessToken);
      if (isLoggedIn) {
        // this.route.navigate([appConstants.navigateToBusOne]);
        return true;
      } else {
        this.route.navigate(['/auth', 'login']);
        return false;
      }
    } catch { }
  }

}
