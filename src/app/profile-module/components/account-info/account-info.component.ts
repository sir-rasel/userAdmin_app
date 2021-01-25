import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { passwordMatchValidator } from 'src/app/_helper/customPasswordMatchValidator';
import { noWhiteSpace } from 'src/app/_helper/noWhiteSpaceValidator';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  userInformation : any;
  form!: FormGroup;
  isAdmin:boolean = false;
  submitted!: boolean;

  constructor(
    private _routes: ActivatedRoute,
    private authService:AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this._routes.data.subscribe( u => {
      this.userInformation = u.userInformation;
      
      this.form = this.fb.group({
        id:[this.userInformation.id],
        FirstName: [this.userInformation.FirstName, Validators.required],
        LastName: [this.userInformation.LastName, Validators.required],
        Email: [this.userInformation.Email, 
          [Validators.required, noWhiteSpace, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        Password: [this.userInformation.Password, [Validators.required, Validators.minLength(6), noWhiteSpace]],
        ConfirmPassword: [this.userInformation.ConfirmPassword, [Validators.required, Validators.minLength(6), noWhiteSpace]],
        Role: [this.userInformation.Role],
        DateOfBirth:[this.userInformation.DateOfBirth],
        Gender:[this.userInformation.Gender],
        Interest:[this.userInformation.Interest],
        Address:[this.userInformation.Address],
        Phone:[this.userInformation.Phone],
      },
      {
        validator: passwordMatchValidator,
      });
    });

    this.isAdmin = this.authService.getLoginState().Role === 'admin';
  }

  get f() { return this.form.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.form.invalid) return;

    this.authService.updateUser(this.form.value)
    .subscribe();
  }

}
