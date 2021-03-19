import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiNotificationsService } from '@taiga-ui/core';

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
    private notificationsService: TuiNotificationsService,
  ) { }

  ngOnInit(): void {
    this.activeItemIndex = this.router.url === '/signup' ? 1 : 0;
  }

  onLogin() {
    this.isLoading = true;
    // TODO: hit api
    this.router.navigate(['home']);
  }

  onSignup() {
    this.isLoading = true;
    // TODO: hit api
    this.router.navigate(['home']);
  }

}
