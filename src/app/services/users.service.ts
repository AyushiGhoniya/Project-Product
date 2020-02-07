import { Injectable } from '@angular/core';
import { IUsers } from '../modals/user.modal';

@Injectable({
    "providedIn": "root"
})

export class UserLoginDetailService {
    userLoginDetails: IUsers[] = [
        {email: "a@gmail.com",password: "a"}
    ];

    getProductDetails(): IUsers[] {
        return this.userLoginDetails;
    }
}