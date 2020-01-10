import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusoneComponent } from './busone/busone.component';
import { AuthLoginGuard } from '../core/guards/auth-login.guard';
import { AdminComponent } from '../shell/admin/admin.component';
import { BustwoComponent } from './bustwo/bustwo.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'busone',
        component: BusoneComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'bustwo',
        component: BustwoComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthLoginGuard]
      }
    ]
  }
] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
