import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Guard
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';

// Services
import { ToasterService } from './services/toaster.service';
import { HttpParamsService } from './services/http-params.service';
import { LoaderService } from './services/loader.service';
import { ValidationService } from './services/validation.service';
import { JwtService } from './services/jwt.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthenticationService } from './services/authentication.service';
import { SignalRService } from './services/signal-r.service';
import { ResponseInterceptor } from './Intereceptors/response-interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastrModule.forRoot({ timeOut: 2000 })],
  providers: [
    AuthenticationService,
    ToasterService,
    LoaderService,
    JwtService,
    LocalStorageService,
    AuthGuard,
    ValidationService,
    HttpParamsService,
    SignalRService,
    AuthLoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    HttpParamsService
  ]
})
export class CoreModule { }
