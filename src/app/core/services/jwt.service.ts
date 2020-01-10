import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/internal/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DecodedToken, UserLocation, Response, Token } from 'src/app/shared/interfaces';
import { LocalStorageService } from './local-storage.service';
import { appConstants } from '../../shared/constants';
import { Subject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class JwtService implements OnDestroy {
  private locationChanged = new Subject<boolean>();
  jwtHelperService = new JwtHelperService();
  watchLocationChanged = this.locationChanged.asObservable().pipe(share());

  constructor(
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient,
  ) {
    this.startLocationChanges();
  }

  ngOnDestroy() {
    this.stopLocationChanges();
  }

  private startLocationChanges(): void {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  private stopLocationChanges(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
    this.locationChanged.complete();
  }

  private storageEventListener(event: StorageEvent) {
    if (event.key === appConstants.localStorage.currentLocation) {
      this.locationChanged.next(true);
    }
  }

  decodeToken(token: string): DecodedToken {
    return this.jwtHelperService.decodeToken(token);
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelperService.isTokenExpired(token);
  }

  getTokenExpirationDate(token: string): Date {
    return this.jwtHelperService.getTokenExpirationDate(token);
  }

  // illegal base64url string (this access token)
  urlBase64Decode(token: string) {
    return this.jwtHelperService.urlBase64Decode(token);
  }

  get getUserLocationId(): number {
    const locationId = this.localStorageService.getObject(appConstants.localStorage.currentLocation);
    return locationId ? Number(locationId) : null;
  }

  get getUserLocationName(): string {
    const locationName = this.localStorageService.getObject(appConstants.localStorage.currentLocationName);
    return locationName;
  }

  get getDefaultUserLocationId(): number {
    const locationId = this.localStorageService.getObject(appConstants.localStorage.defaultLocation);
    return locationId ? Number(locationId) : null;
  }

  get getDefaultUserLocationName(): string {
    const locationName = this.localStorageService.getObject(appConstants.localStorage.defaultLocationName);
    return locationName;
  }

  get getUserId(): number {
    let userId: number;
    const token = this.localStorageService.getObject(appConstants.localStorage.accessToken);
    const decodedToken = this.jwtHelperService.decodeToken(token);
    if (decodedToken) {
      userId = decodedToken.id;
    }
    return userId;
  }

  get getUserName(): string {
    let userName: string;
    const token = this.localStorageService.getObject(appConstants.localStorage.accessToken);
    const decodedToken = this.jwtHelperService.decodeToken(token);
    if (decodedToken) {
      userName = decodedToken.username;
    }
    return userName;
  }

  async updateUserDefaultLocation(locationId: number, locationName: string): Promise<boolean> {
    let result = false;

    if ((locationId || locationId >= 0) && locationName) {
      this.localStorageService.setObject(appConstants.localStorage.defaultLocation, locationId);
      this.localStorageService.setObject(appConstants.localStorage.defaultLocationName, locationName);
      result = true;
    }
    this.locationChanged.next(result);

    return Promise.resolve<boolean>(result);
  }

  async updateUserCurrentLocation(locationId: number, locationName: string): Promise<boolean> {
    let result = false;

    if ((locationId || locationId >= 0) && locationName) {
      this.localStorageService.setObject(appConstants.localStorage.currentLocation, locationId);
      this.localStorageService.setObject(appConstants.localStorage.currentLocationName, locationName);
      result = true;
    }
    this.locationChanged.next(result);

    return Promise.resolve<boolean>(result);
  }

  getAccessTokenByRefreshToken(refreshToken: string): Observable<Token> {
    return this.httpClient
      .get<Token>(`/api/v1/Account/RefreshToken/${refreshToken}`);
  }

  async getUserLocations(userId: number, userLocation: number): Promise<Array<UserLocation>> {
    let result = await this.httpClient
      .get<Response<any>>(`/api/v1/Users/GetAllUserLocation/${userId}/${userLocation}`)
      .pipe(map((response: Response<Array<UserLocation>>) => response.result))
      .toPromise();

    if (result && result.length > 0) {
      result = result.filter((eachLocation) => {
        return eachLocation.isAssigned === true;
      });
    }

    return Promise.resolve<Array<UserLocation>>(result);
  }
}
