import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string;
  public userLogged: boolean;
  public loginForm: any;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService // private _router: Router
  ) {
    this.title = 'Find Your Big Deal!';
    // this.userLogged = false;
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(formValues: any) {
    this.userLogged = this._loginService.userExist(
      formValues.email,
      formValues.password
    );

    if (this.userLogged) {
      // this._router.navigate(['/search']);
      console.log('login.component.ts', this.userLogged);
    }
  }
}
