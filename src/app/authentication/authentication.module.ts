import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { AuthenticationComponent } from './authentication.component';
import { AuthLoginGuard } from '../core/guards/auth-login.guard';
import { SharedModule } from '../shared/shared.module';
import { RegisterationComponent } from './registeration/registeration.component';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MyMaterialModule } from './material';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterationComponent],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MyMaterialModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MyMaterialModule],
  providers: [AuthLoginGuard]
})
export class AuthenticationModule {
  constructor() {
  }
}
