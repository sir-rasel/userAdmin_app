import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserWelcomeComponent } from './components/user-welcome/user-welcome.component';
import { SharedModule } from '../shared-module/shared.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserWelcomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
