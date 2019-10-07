import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoreFacade } from '@core/core-facade';
import { Credential } from '@models/index';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private coreFacade: CoreFacade) {}

  ngOnInit() {}
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]]
  });

  login(credential: Credential) {
    this.coreFacade.loginUser(credential);
  }
}
