import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  SignupForm: FormGroup;
  forbiddenUserNames = ['admin'];
  user = {
    email: "Akhlaque",
    password: ""
  };
  constructor(private _router: Router) {
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], <AsyncValidatorFn>this.forbiddenEmails),
        'password': new FormControl(),
      }),
    });
  }
  ngOnInit(): void {
    this.SignupForm.setValue({
      'userData': {
        'username': 'Akhlaque',
        'email': 'akhlaquea01@gmail.com',
        'password': 'Password'
      }
    })
  }
  status: boolean = true;
  switchSingInAndUp() {
    this.status = !this.status;
  }
  signIn(x: any) {
    console.log(this.user);
    console.log(x);
    if (this.user.email && this.user.password) {
      const userDetails = {
        email: this.user.email,
        token: Math.random() * 100000,
        isAdmin: false,
        Name: "Akhlaque"
      }
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      if (userDetails.isAdmin) {
        this._router.navigate(['dashboard'])
      } else {
        this._router.navigate(['main']);
      }
    }
  }
  signUp() {
    console.log(this.SignupForm);
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@test.com') {
          resolve({ 'emailIsForbidden': true });
        }
        else {
          resolve(null);
        }

      }, 1500);
    });
    return promise;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) != -1) {
      return { 'nameisForbidden': true };
    }

    return { 'nameisForbidden': false };
  }

}
