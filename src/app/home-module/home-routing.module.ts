import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'auth',
    loadChildren: () => import('../shared-module/shared.module').then(m => m.SharedModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
