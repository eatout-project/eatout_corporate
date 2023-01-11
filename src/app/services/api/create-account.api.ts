import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {
  RestaurantLoginResponseApiObject,
  RestaurantRegistrationRequestApiObject
} from "../../businessObjects/LoginApiObject";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postRestaurantAccount(restaurantAccount: RestaurantRegistrationRequestApiObject): Observable<RestaurantLoginResponseApiObject> {
    return this.eatoutCorporateHttpClient.post<RestaurantLoginResponseApiObject>('http://localhost:5002/register', restaurantAccount);
  }
}
