import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

// Services
import { ValidationService } from '../../core/services/validation.service';


@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})

export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() label = '';
  @Input() id = '';

  constructor(private validationService: ValidationService) { }

  get errorMessage() {
    if (typeof this.control) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.control.dirty)) {
          return this.validationService.getValidatorErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }
}
