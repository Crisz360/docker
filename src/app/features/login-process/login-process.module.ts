import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginProcessRoutingModule } from './login-process-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RegisterComponent,
    MainPageComponent,
  ],
  imports: [CommonModule, LoginProcessRoutingModule, SharedModule],
})
export class LoginProcessModule {}
