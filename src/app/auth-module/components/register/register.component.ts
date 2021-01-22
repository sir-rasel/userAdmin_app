import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/_helper/customPasswordMatchValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      FirstName: ["", Validators.required],
      LastName: [""],
      Email: ["", Validators.required],
      Password: ["", [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ["", [Validators.required, Validators.minLength(6)]],
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
    console.warn(this.registrationForm.value);

    if(this.registrationForm.invalid) return;

    this.router.navigateByUrl('/auth/login');

  }

}
