import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home',component: HomeComponent},
  {path: 'auth' ,loadChildren: './authentication/signin-signup-form/signin-signup-form.module#SigninSignupFormModule'},
  {path: 'products' ,loadChildren: './product-master/product-master.module#ProductMasterModule'},
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
