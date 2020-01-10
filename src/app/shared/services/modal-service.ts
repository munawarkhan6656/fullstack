import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable()
export class ModalService {
  constructor(private confirmationService: ConfirmationService) { }
}
