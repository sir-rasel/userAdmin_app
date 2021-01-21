import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path:'register',
    redirectTo: '/auth/register',
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
export class SharedRoutingModule { }
