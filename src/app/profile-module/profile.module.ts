import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';



@NgModule({
  declarations: [AccountInfoComponent, UserInfoComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
