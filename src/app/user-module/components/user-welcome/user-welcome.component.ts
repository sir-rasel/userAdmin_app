import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {
  userName : any;
  id : any;
  
  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.id = this.authService.getLoginState().id;
    this.authService.getUser(this.id).subscribe(
      u => {
        this.userName = u.FirstName + ' ' + u.LastName;
      }
    )
  }
}
