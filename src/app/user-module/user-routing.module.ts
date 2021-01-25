import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthenticationGuard } from '../_guards/admin-authentication.guard';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserWelcomeComponent } from './components/user-welcome/user-welcome.component';

const routes: Routes = [
  {
    path:'',
    component:UserWelcomeComponent,
  },
  {
    path:'list',
    component:UserListComponent,
    children : [
      {
        path:'profile/:id/accountInfo',
        redirectTo: '/profile/:id/accountInfo',
        pathMatch: 'full',
      },
    ],
    canActivate: [AdminAuthenticationGuard],
  },
  {
    path:'**',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
