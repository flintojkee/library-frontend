import { NgModule } from '@angular/core';
import { AuthComponent, LoginComponent } from './pages';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormLoginComponent } from './components';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    // SignupComponent,
    // GoogleLoginButtonComponent,
    // FacebookLoginButtonComponent,
    FormLoginComponent
    // FormSignUpComponent
  ],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: []
})
export class AuthModule {}
