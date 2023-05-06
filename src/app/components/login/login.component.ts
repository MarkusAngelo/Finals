import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  storedUsername: String = 'adminGroup1';
  storedPassword: String = 'changethefuture';

  login() {
    const { username, password } = this.loginForm.value;
    if (username === this.storedUsername && password === this.storedPassword) {
      this.router.navigate(['admin-dashboard']);
    } else {
      alert('Invalid Username and Password');
    }
  }
  constructor(private router: Router) {}

  ngOnInit() {}
}
