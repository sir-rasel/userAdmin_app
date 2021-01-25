import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetIndividualUserInfo implements Resolve<any> {
  constructor(
    private authService: AuthService,
  ) {}
  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params['id'];
    return this.authService.getUser(id);
  }
}