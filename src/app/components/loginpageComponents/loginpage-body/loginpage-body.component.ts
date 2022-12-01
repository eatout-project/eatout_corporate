import {Component, OnInit} from '@angular/core';
import {Params, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LoginFacade} from "../../../services/facades/login.facade";
import {take} from "rxjs";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";

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
    private loginFacade: LoginFacade,
    private restaurantAccountStore: RestaurantAccountStore
    ) {
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
        this.restaurantAccountStore.storeRestaurantAccountLogin(restaurantLogin)
        const queryParams: Params = {
          entryType: 'login'
        }
        this.router.navigate(["homepage"], {queryParams});
      }
    )
  }

  goToFrontpage(): void {
    this.router.navigate([""]);
  }
}

