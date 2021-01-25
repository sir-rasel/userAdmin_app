import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginAuthenticationGuard } from '../_guards/login-authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/auth/register',
    redirectTo: '/auth/register'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register/auth/login',
    redirectTo: 'login'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [LoginAuthenticationGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
