import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registrationForm = this.fb.group({
    FirstName: [""],
    LastName: [""],
    Email: [""],
    Password: [""],
    ConfirmPassword: [""],
    Role: this.fb.group({
      user:[""],
      admin:[""],
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.registrationForm.value);
  }

}
