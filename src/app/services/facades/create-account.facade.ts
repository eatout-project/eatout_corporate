import {Injectable} from "@angular/core";
import {CreateAccountApi} from "../api/create-account.api";
import {
  CreateAccountFormObject
} from "../../components/createAccountPageComponents/create-account-page-body/create-account-page-body.component";
import {Address} from "../../businessObjects/Address";
import {RestaurantAccount} from "../../businessObjects/RestaurantAccount";
import {Observable} from "rxjs";

@Injectable()
export class CreateAccountFacade {
  constructor(private createAccountApi: CreateAccountApi) {
  }

  public postRestaurantAccount(createAccountFormObject: CreateAccountFormObject): Observable<RestaurantAccount> {
    const restaurantAddress: Address = {
      streetName: createAccountFormObject.streetName,
      city: createAccountFormObject.city,
      zipCode: createAccountFormObject.zipCode,
      houseNumber: createAccountFormObject.houseNumber
    };

    const restaurantAccount: RestaurantAccount = {
      email: createAccountFormObject.email,
      password: createAccountFormObject.password,
      name: createAccountFormObject.name,
      description: createAccountFormObject.description,
      address: restaurantAddress
    };
    console.log('Hej3',restaurantAccount);

    return this.createAccountApi.postRestaurantAccount(restaurantAccount);
  }

}
