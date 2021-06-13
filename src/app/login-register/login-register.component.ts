import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  status: boolean = true;
  clickEvent(){
      console.log(this.status);
      this.status = !this.status;
      console.log(this.status);

  }

}
