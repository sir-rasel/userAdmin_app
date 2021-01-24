import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {
  loginState: any;
  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.onClick();
  }

  onClick(): void {
    this.loginState = this.authService.getLoginState();
    console.log(this.loginState);
  }
}
