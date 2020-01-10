import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {

  constructor(private toastr: ToastrService) {
  }

  error(message: string) {
    this.toastr.error(message, 'Error');
  }

  success(message: string) {
    this.toastr.success(message, 'Success');
  }

  warning(message: string) {
    this.toastr.warning(message, 'Warning');
  }

  info(message: string){
    this.toastr.info(message);
  }
}
