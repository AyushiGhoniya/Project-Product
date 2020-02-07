import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes,RouterModule } from '@angular/router';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const routes: Routes = [
  {path: 'signup' ,component: SignUpFormComponent},
  {path: 'signin' ,component: SignInFormComponent},
];

@NgModule({
  declarations: [
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class SigninSignupFormModule { }
