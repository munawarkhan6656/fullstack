import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { JwtModule } from '@auth0/angular-jwt';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
declarations: [AppComponent],
imports: [
BrowserModule,
BrowserAnimationsModule,
CoreModule,
DynamicDialogModule,
JwtModule,
HttpClientModule,
AppRoutingModule,

],
bootstrap: [AppComponent],
})
export class AppModule { }
