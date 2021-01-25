import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./home-module/home.module').then(m => m.HomeModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth-module/auth.module').then(m => m.AuthModule)
  },
  {
    path:'user',
    loadChildren: () => import('./user-module/user.module').then(m => m.UserModule)
  },
  {
    path:'profile',
    loadChildren: () => import('./profile-module/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
