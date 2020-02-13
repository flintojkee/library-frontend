import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lbr-facebook-login-button',
  templateUrl: './facebook-login-button.component.html',
  styleUrls: ['./facebook-login-button.component.scss']
})
export class FacebookLoginButtonComponent implements OnInit {
  constructor() {}
  @Output() facebookLoggedIn = new EventEmitter<string>();
  ngOnInit() {}
  login() {
    window['FB'].login(
      (response) => {
        console.log('login response', response);
        this.facebookLoggedIn.emit(response.authResponse.accessToken);
        if (response.authResponse) {
          window['FB'].api(
            '/me',
            {
              fields: 'last_name, first_name, email'
            },
            (userInfo) => {
              console.log('user information');
              console.log(userInfo);
            }
          );
        } else {
          console.log('User login failed');
        }
      },
      { scope: 'email' }
    );
  }
}
