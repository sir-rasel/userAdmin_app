import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-api/in-memory-data.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthModule } from './auth-module/auth.module';
import { HomeModule } from './home-module/home.module';
import { SharedModule } from './shared-module/shared.module';
import { HeaderComponent } from './_components/header/header.component';
import { UserIconComponent } from './_components/user-icon/user-icon.component';
import { FooterComponent } from './_components/footer/footer.component';
import { UserModule } from './user-module/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserIconComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    SharedModule,
    AuthModule,
    HomeModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
