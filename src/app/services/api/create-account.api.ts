import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {RestaurantAccount} from "../../businessObjects/RestaurantAccount";

export interface RestaurantAccountApiObject {
  email: string;
  password: string;
  name: string;
  description: string;
  address: RestaurantAddressApiObject;
}

export interface RestaurantAddressApiObject {
  streetName: string,
  houseNumber: string,
  zipCode: number,
  city: string,
}

@Injectable({
  providedIn: 'root'
})
export class CreateAccountApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postRestaurantAccount(restaurantAccount: RestaurantAccount): Observable<RestaurantAccount> {

    return this.eatoutCorporateHttpClient.post<RestaurantAccount>('register', restaurantAccount);
  }
}
