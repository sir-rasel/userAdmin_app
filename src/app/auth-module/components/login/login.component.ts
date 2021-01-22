import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;
    console.warn(this.loginForm.value);

    if(this.loginForm.invalid) return;
    
    this.router.navigateByUrl('/auth/register');
  }

}
