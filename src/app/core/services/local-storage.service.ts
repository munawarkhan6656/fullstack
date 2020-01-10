import { Injectable } from '@angular/core';
import { appConstants } from 'src/app/shared/constants/appConstants';

@Injectable()
export class LocalStorageService {
  constructor() {}

  getObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(appConstants.localStorage.decodedAccessToken))[key];
  }

  setObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeObject(key){
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
