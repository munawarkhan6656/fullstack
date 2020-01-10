import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { dateFormat as defaultDateFormat } from '../constants';

@Injectable()
export class DateService {
  contractMinimumDate = '01-01-2020';
  constructor() {}

  datetoString(value: Date): string {
    let result: string;
    if (value) {
      let valueCopy = new Date(value);
      if (!this.isValidDate(value)) {
        valueCopy = this.stringToDate(value.toString());
      }
      const hoursDiff =
        (valueCopy.getHours() - valueCopy.getTimezoneOffset()) / 60;
      const minutesDiff =
        (valueCopy.getHours() - valueCopy.getTimezoneOffset()) % 60;
      valueCopy.setHours(hoursDiff);
      valueCopy.setMinutes(minutesDiff);
      result = valueCopy.toISOString();
    }
    return result;
  }

  isValidDate(date: Date) {
    return date instanceof Date && !isNaN(date.getTime());
  }

  getMinimumContractValidToDate(): Date {
    return new Date(this.contractMinimumDate);
  }

  public stringToDate(dateStr: string): Date {
    let result;
    if (dateStr) {
      const [day, month, year] =
        dateStr.indexOf('-') >= 0 ? dateStr.split('-') : dateStr.split('/');
      result = new Date(Number(year), Number(month) - 1, Number(day));
    }

    return result;
  }

  toFormattedDate(value: any, dateFormat?: string): string {
    let result = null;
    if (value) {
      const pipe = new DatePipe('en-US');
      if (dateFormat) {
        result = pipe.transform(value, dateFormat);
      } else {
        result = pipe.transform(value, defaultDateFormat);
      }
    }
    return result;
  }

  public datetoWithoutTime(value: Date): Date {
    let result: Date;
    if (value) {
      result = new Date(value);
      result.setHours(0);
      result.setMinutes(0);
      result.setSeconds(0);
      result.setMilliseconds(0);
    }

    return result;
  }

  dateComparator(filterLocalDateAtMidnight, cellValue) {
    const dateAsString = cellValue;

    if (dateAsString == null) {
      return -1;
    }
    const cellDate = this.datetoWithoutTime(new Date(dateAsString));
    // const cellDate = new Date(dateAsString);
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  }
}
