import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { noWhiteSpace } from 'src/app/_helper/noWhiteSpaceValidator';
import { User } from 'src/app/_models/User';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  isCorrectPassword = true;

  users:User | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, noWhiteSpace, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', [Validators.required, Validators.minLength(6), noWhiteSpace]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.loginForm.invalid) return;
    
    this.authService.searchUserByEmailAndPassword(this.f.Email.value, this.f.Password.value)
    .subscribe(u => {
      if(u.length !== 0) {
        this.users = u[0];
        
        this.loading = true;
        this.authService.setLoginState({id:this.users.id, Email:this.users.Email, Role:this.users.Role});
        this.router.navigateByUrl('/user');
      }
      else this.isCorrectPassword = false;
    });
  }
}
