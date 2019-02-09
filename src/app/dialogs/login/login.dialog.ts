import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.dialog.html',
  styleUrls: ['./login.dialog.scss']
})
export class LoginDialog implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(user: string, password: string) {
    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('user', password);
      window.location.reload();
    } else {
      this.snackBar.open('Username or password wrong!', 'loginFailed', {
        duration: 2000,
      });
    }
  }

  keyDownFunction(event, user: string, password: string) {
    if (event.keyCode === 13) {
      this.login(user, password);
    }
  }
}
