import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [],
  imports: [
    SigninComponent,
    SignupComponent,
    CommonModule, 
    LoginRoutingModule,
  ],
})
export class LoginModule {}
