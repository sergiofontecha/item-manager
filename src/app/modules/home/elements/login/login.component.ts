import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title: string;
  public userLogged: {};
  public loginForm: any;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _loginService: LoginService
  ) {
    this.title = 'Find Your Big Deal!';
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(formValues: any) {
    this._loginService.userExist(formValues.email, formValues.password);
    this._loginService.cast.subscribe(userExist => {
      if (userExist) {
        this.userLogged = userExist;
        this._router.navigate(['/search']);
        this.loginForm.reset();
      }
    });
  }
}
