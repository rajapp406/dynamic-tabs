import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DEFAULT_VALIDATE_COMPANY_EMAIL } from '../constants/generic.const';
import { UserService } from '../services/user.service';
import { UserLogin } from '../types/user.type';
import { validateEmail, validatePassword } from '../utils/validators.util';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  emailValidCompany = DEFAULT_VALIDATE_COMPANY_EMAIL;
  @Input() data: any;
  username: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  email: FormControl = new FormControl('', [Validators.required, validateEmail(this.emailValidCompany)]);
  password: FormControl = new FormControl('', [Validators.required, validatePassword]);
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {}

  onLoginFormSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value).subscribe(
        (data: UserLogin) => {
          if (data) {
            this.userService.userLogin$.next({ type: "LOGIN_SUCCESS", data });
          }
        }
      )
    }
  }
}

