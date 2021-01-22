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
