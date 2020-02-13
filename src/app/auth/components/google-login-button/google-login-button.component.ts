import { Component, OnInit, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
declare const gapi: any;
@Component({
  selector: 'lbr-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.scss']
})
export class GoogleLoginButtonComponent implements OnInit, AfterViewInit {
  @Output() googleLoggedIn = new EventEmitter<string>();

  private clientId = '773438404650-c5rjir3bgdp1lg1f6s7t3uf5uf53miug.apps.googleusercontent.com';
  public auth2: any;
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  constructor(private element: ElementRef) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.googleInit();
  }
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        console.log(googleUser);
        this.googleLoggedIn.emit(googleUser.getAuthResponse().id_token);
      },
      (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      }
    );
  }
}
