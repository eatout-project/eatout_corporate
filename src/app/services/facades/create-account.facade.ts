import {Injectable} from "@angular/core";
import {CreateAccountApi} from "../api/create-account.api";
import {
  CreateAccountFormObject
} from "../../components/createAccountPageComponents/create-account-page-body/create-account-page-body.component";
import {Address} from "../../businessObjects/Address";
import {Observable} from "rxjs";
import {
  RestaurantRegistrationRequestApiObject,
  RestaurantRegistrationResponseApiObject
} from "../../businessObjects/LoginApiObject";

@Injectable()
export class CreateAccountFacade {
  constructor(private createAccountApi: CreateAccountApi) {
  }

  public postRestaurantAccount(createAccountFormObject: CreateAccountFormObject): Observable<RestaurantRegistrationResponseApiObject> {
    const restaurantAddress: Address = {
      streetName: createAccountFormObject.streetName,
      city: createAccountFormObject.city,
      zipCode: createAccountFormObject.zipCode,
      houseNumber: createAccountFormObject.houseNumber
    };

    const restaurantAccount: RestaurantRegistrationRequestApiObject = {
      email: createAccountFormObject.email,
      password: createAccountFormObject.password,
      restaurantName: createAccountFormObject.restaurantName,
      description: createAccountFormObject.description,
      address: restaurantAddress
    };

    return this.createAccountApi.postRestaurantAccount(restaurantAccount);
  }

}
