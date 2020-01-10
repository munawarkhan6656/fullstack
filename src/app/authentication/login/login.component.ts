// Core
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Interfaces
import { UserLogin, DecodedToken, Token } from '../../shared/interfaces';

// constants
import { appConstants } from '../../shared/constants/appConstants';

// Services
import { AuthenticationService } from '../../core/services/authentication.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { JwtService } from '../../core/services/jwt.service';
import { ToasterService } from '../../core/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private jwtHelperService: JwtService,
    private toasterService: ToasterService,
    private localStorageService: LocalStorageService,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {

      const accessToken = params.token;
      if (accessToken) {

        setTimeout(() => {
          this.postLoginRoutine(accessToken);
        }, 1000);
        return;
      }
    });

    this.isUserLoggedIn();
    this.initLoginForm();
  }

  isUserLoggedIn() {
    const loggedUser = this.localStorageService.getObject(appConstants.localStorage.accessToken);
    if (loggedUser) {
      this.router.navigate([appConstants.navigateToDashboard]);
    }
    return;
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  async onSubmit() {
    const loginPayload: UserLogin = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    try {
      const response = await this.authenticationService.login(loginPayload);
      await this.postLoginRoutine(response);
      return;
    } catch (e) { }
  }


  async postLoginRoutine(response: any) {
    try {

      this.localStorageService.setObject(appConstants.localStorage.accessToken, response.accessToken);
      this.localStorageService.setObject(appConstants.localStorage.UserId, response.id);

      await this.router.navigate([appConstants.navigateToDashboard]);
      return;
    } catch (e) { }

  }
}
