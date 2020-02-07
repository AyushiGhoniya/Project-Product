import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/modals/user.modal';
import { UserLoginDetailService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private userLoginDetails: UserLoginDetailService, private router: Router) { }

  userDetails: IUsers[];
  userDetail: IUsers;

  confirmPassword: string = "";
  password: string = "";
  email: string = "";

  ngOnInit() {
    this.userDetail = {email: "", password: ""};
  }

  getSignUpDetails(data: NgForm) {
    this.userDetail = {
      email: data.controls.txtEmail.value,
      password: data.controls.txtPassword.value
    }
    this.userLoginDetails.userLoginDetails.push(this.userDetail);
    this.router.navigateByUrl('/auth/signin');
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}
