import { Injectable } from '@angular/core';

// Service
import { LocalStorageService } from './local-storage.service';

// Constant
import { appConstants } from '../../shared/constants/appConstants';
import { AuthOperationName } from '../../shared/enum/auth-operation-name.enum';

// Interfaces
import {  GroupLine } from '../../shared/interfaces';

@Injectable()
export class PermissionService {

  constructor(private localStorageService: LocalStorageService) { }

  isAuthorized(pageId: number, operationName: string) {
    return true;
  }

}
