import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMassageComponent } from './components/login-massage/login-massage.component';
import { RegisterMassageComponent } from './components/register-massage/register-massage.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    LoginMassageComponent,
    RegisterMassageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    LoginMassageComponent,
    RegisterMassageComponent,
  ]
})
export class SharedModule { }
