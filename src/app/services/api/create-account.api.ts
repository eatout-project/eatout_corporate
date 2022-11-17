import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {
  RestaurantRegistrationRequestApiObject,
  RestaurantRegistrationResponseApiObject
} from "../../businessObjects/LoginApiObject";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postRestaurantAccount(restaurantAccount: RestaurantRegistrationRequestApiObject): Observable<RestaurantRegistrationResponseApiObject> {

    return this.eatoutCorporateHttpClient.post<RestaurantRegistrationResponseApiObject>('5002/register', restaurantAccount);
  }
}
