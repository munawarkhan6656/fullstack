import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class DisplayMessageService {
  constructor(private messageService: MessageService) { }

  message(config: any): void {
    this.messageService.add(config);
  }

  error(message: string, summary?: string): void {
    this.messageService.clear();
    const config = {
      severity: 'error',
      summary: summary ? summary : 'Error',
      detail: message
    }
    this.messageService.add(config);
  }
}
