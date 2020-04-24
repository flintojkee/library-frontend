import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/services';
import { Observable } from 'rxjs';
import { UserRoles } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  role$: Observable<UserRoles>;
  userRoles = UserRoles;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.role$ = this.authService.role;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.logout();
    this.menu.close();
  }
  login() {
    this.router.navigate(['/auth/login']);
    this.menu.close();
  }
}
