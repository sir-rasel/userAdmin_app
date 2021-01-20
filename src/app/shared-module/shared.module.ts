import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMassageComponent } from './components/login-massage/login-massage.component';
import { RegisterMassageComponent } from './components/register-massage/register-massage.component';



@NgModule({
  declarations: [
    LoginMassageComponent,
    RegisterMassageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginMassageComponent,
    RegisterMassageComponent,
  ]
})
export class SharedModule { }
