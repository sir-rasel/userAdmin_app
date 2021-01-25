import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountInfoComponent, 
    UserInfoComponent, 
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
