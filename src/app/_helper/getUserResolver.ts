import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllUser implements Resolve<any> {
  constructor(
    private authService: AuthService,
  ) {}
  resolve() {
    return this.authService.getUsers();
  }
}