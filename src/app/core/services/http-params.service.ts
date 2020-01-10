import { Injectable } from '@angular/core';
import { QueryParams } from '../../shared/interfaces';
import { HttpParams } from '@angular/common/http';
import { appConstants } from 'src/app/shared/constants';

@Injectable()
export class HttpParamsService {

  constructor() { }


  getQueryParams(params: QueryParams): HttpParams {
    const queryParams: HttpParams = new HttpParams();
    return queryParams;
  }
}
