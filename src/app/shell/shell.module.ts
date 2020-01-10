import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShellRoutingModule } from './shell-routing.module';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { BusoneComponent } from './busone/busone.component';
import { AuthLoginGuard } from '../core/guards/auth-login.guard';
import { AdminComponent } from './admin/admin.component';
import { Adminb1Component } from './adminb1/adminb1.component';
import { Adminb2Component } from './adminb2/adminb2.component';
import { BustwoComponent } from './bustwo/bustwo.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ShellComponent,
    DashboardComponent,
    BusoneComponent,
    AdminComponent,
    Adminb1Component,
    Adminb2Component,
    BustwoComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [MatButtonModule, MatToolbarModule]
})
export class ShellModule {
}
