import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/_helper/customPasswordMatchValidator';
import { noWhiteSpace } from 'src/app/_helper/noWhiteSpaceValidator';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  loading = false;
  submitted = false;
  isEmailExist = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      Email: ["", [Validators.required, noWhiteSpace, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ["", [Validators.required, Validators.minLength(6), noWhiteSpace]],
      ConfirmPassword: ["", [Validators.required, Validators.minLength(6), noWhiteSpace]],
      Role: ['user'],
      DateOfBirth:[''],
      Gender:['male'],
      Interest:[''],
      Address:[''],
      Phone:[''],
    },
    {
      validator: passwordMatchValidator,
    });
  }

  get f() { return this.registrationForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.registrationForm.invalid) return;

    this.authService.searchUsers('Email', this.f.Email.value)
    .subscribe(u => {
      if(u.length === 0){
        this.authService.addUser(this.registrationForm.value).subscribe(
          val => {
            if(val){
              this.loading = true;
              this.router.navigateByUrl('/auth/login');
            }
          }  
        );
      }
      else this.isEmailExist = true;
    });
  }

}
