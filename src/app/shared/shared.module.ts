import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Modules of primeng
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RadioButtonModule } from 'primeng/radiobutton';
// Components
import { IsAuthorizedDirective } from './directives/is-authorized.directive';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
// Services


import { MessageService, DialogService } from 'primeng/api';
import { DateService } from './services/date.service';
import { ModalService } from './services/modal-service';
import { DisplayMessageService } from './services/message-service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { HttpParamsService } from '../core/services/http-params.service'

import { TooltipModule } from 'primeng/tooltip';
import { HelperService } from './services/helper.service';

@NgModule({
  declarations: [
    ControlMessagesComponent,
    IsAuthorizedDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    RouterModule,
    ToastModule,
    InputTextModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    MultiSelectModule,
    BreadcrumbModule,
    RadioButtonModule,
    TooltipModule
  ],
  providers: [
    ConfirmationService,
    ModalService,
    DateService,
    MessageService,
    DisplayMessageService,
    HelperService,
    HttpParamsService,
    DialogService,
  ],
  exports: [
    ConfirmDialogModule,
    BreadcrumbModule,
    RadioButtonModule,
    ToastModule,
    InputTextModule,
    MultiSelectModule,
    ControlMessagesComponent,
    AutoCompleteModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    IsAuthorizedDirective,
    TooltipModule,
   ],
})
export class SharedModule { }
