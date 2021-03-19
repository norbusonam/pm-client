import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', Validators.required),
  })
  signupForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.min(8)]),
    confirmPassword: new FormControl ('', Validators.required),
  })
  activeItemIndex: number = 0;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private notificationsService: TuiNotificationsService
  ) { }

  ngOnInit(): void {
    this.activeItemIndex = this.router.url === '/signup' ? 1 : 0;
  }

  onLogin() {
    this.isLoading = true;
    this.api.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      err => {
        this.notificationsService.show(
          err.error.msg,
          {
            label: 'Login error',
            status: TuiNotification.Error,
          },
        ).subscribe()
        this.isLoading = false;
      },
    )
  }

  onSignup() {
    const signupPayload = {
      fullName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    }
    this.isLoading = true;
    this.api.signup(signupPayload).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      err => {
        this.notificationsService.show(
          err.error.msg,
          {
            label: 'Signup error',
            status: TuiNotification.Error,
          },
        ).subscribe()
        this.isLoading = false;
      },
    )
  }

}
