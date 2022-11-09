import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {CreateAccountFacade} from "../../../services/facades/create-account.facade";
import {take} from "rxjs";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";

export interface CreateAccountFormObject {
  restaurantName: string;
  description: string;
  streetName: string;
  houseNumber: number;
  city: string;
  zipCode: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-create-account-page-body',
  templateUrl: './create-account-page-body.component.html',
  styleUrls: ['./create-account-page-body.component.scss']
})
export class CreateAccountPageBodyComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private createAccountFacade: CreateAccountFacade,
    private restaurantAccountStore: RestaurantAccountStore) {
  }

  ngOnInit(): void {
  }

  restaurantData = this.formBuilder.group({
    restaurantName: [''],
    description: [''],
    streetName: [''],
    houseNumber: [],
    city: [''],
    zipCode: [],
    email: [''],
    password: ['']
  })

  onSubmit() {
    const createAccountFormObject: CreateAccountFormObject = {
      restaurantName: this.restaurantData.value.restaurantName || '',
      description: this.restaurantData.value.description || '',
      streetName: this.restaurantData.value.streetName || '',
      houseNumber: this.restaurantData.value.houseNumber || 0,
      city: this.restaurantData.value.city || '',
      zipCode: this.restaurantData.value.zipCode || 0,
      email: this.restaurantData.value.email || '',
      password: this.restaurantData.value.password || ''
    };

    this.createAccountFacade.postRestaurantAccount(createAccountFormObject).pipe(take(1)).subscribe(value => {
      this.restaurantAccountStore.storeRestaurantAccount(value);
    })
  }

  goToFrontpage(): void {
    this.router.navigate([""]);
  }
}
