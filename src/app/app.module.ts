import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-api/in-memory-data.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthModule } from './auth-module/auth.module';
import { HomeModule } from './components/home.module';
import { SharedModule } from './shared-module/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserIconComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
