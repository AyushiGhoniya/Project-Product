import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserLoginDetailService } from '../../../services/users.service';
import { IUsers } from 'src/app/modals/user.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  userDetail: IUsers;

  constructor(private userLoginDetails: UserLoginDetailService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  ngOnInit() {}

  login() {
    this.userDetail = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }

    this.userLoginDetails.userLoginDetails.filter(item => {
      if(item.email == this.userDetail.email && item.password == this.userDetail.password) {
        this.router.navigateByUrl('products/list');
        console.log(this.userDetail);
      } else {
        console.log("Email or Password is invalid.");
      }
    })
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}