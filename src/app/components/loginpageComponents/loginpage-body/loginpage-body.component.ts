import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LoginFacade} from "../../../services/facades/login.facade";
import {take} from "rxjs";

export interface LoginFormObject {
  email: string;
  password: string;
}

@Component({
  selector: 'app-loginpage-body',
  templateUrl: './loginpage-body.component.html',
  styleUrls: ['./loginpage-body.component.scss']
})
export class LoginpageBodyComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginFacade: LoginFacade) {
  }

  ngOnInit(): void {
  }

  restaurantLoginData = this.formBuilder.group({
    email: [''],
    password: ['']
  });

  onSubmit() {
    const loginFormObject: LoginFormObject = {
      email: this.restaurantLoginData.value.email || '',
      password: this.restaurantLoginData.value.password || ''
    };


    this.loginFacade.postRestaurantLogin(loginFormObject).pipe(take(1)).subscribe(
      restaurantLogin => {
        console.log(restaurantLogin);
      }
    )

    console.log('Login posted')
  }

  goToFrontpage(): void {
    this.router.navigate([""]);
  }
}
