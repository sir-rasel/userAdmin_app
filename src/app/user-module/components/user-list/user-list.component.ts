import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any;

  constructor(
    private _routes: ActivatedRoute,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    this._routes.data.subscribe( u => {
      this.users = u.users;
    });
  }

  deleteUser(id: number) {
    const user = this.users.find((x: { id: number; }) => x.id === id);
    user.isDeleting = true;
    this.authService.deleteUser(id)
      .subscribe(() => this.users = this.users.filter((x: { id: number; }) => x.id !== id));
  }
}
