import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static-components/header/header.component';
import { FooterComponent } from './static-components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserIconComponent } from './static-components/user-icon/user-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-api/in-memory-data.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginMassageComponent } from './shared-module/components/login-massage/login-massage.component';
import { RegisterMassageComponent } from './shared-module/components/register-massage/register-massage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserIconComponent,
    LoginMassageComponent,
    RegisterMassageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
