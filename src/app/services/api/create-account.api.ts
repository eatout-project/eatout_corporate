import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {
  RestaurantLoginResponseApiObject,
  RestaurantRegistrationRequestApiObject
} from "../../businessObjects/LoginApiObject";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountApi {

  url: string = environment.ACCOUNT_SERVICE_HOST_URL;

  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postRestaurantAccount(restaurantAccount: RestaurantRegistrationRequestApiObject): Observable<RestaurantLoginResponseApiObject> {
    return this.eatoutCorporateHttpClient.post<RestaurantLoginResponseApiObject>(this.url + '/register', restaurantAccount);
  }
}
