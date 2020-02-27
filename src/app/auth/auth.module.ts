import { NgModule } from '@angular/core';
import { AuthComponent, LoginComponent } from './pages';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormLoginComponent, FormSignUpComponent } from './components';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    FormLoginComponent,
    SignUpComponent,
    FormSignUpComponent
  ],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: []
})
export class AuthModule {}
