import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {RestaurantLogin} from "../../businessObjects/RestaurantLogin";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postRestaurantLogin(restaurantLogin: RestaurantLogin): Observable<RestaurantLogin>{
    console.log('Hej2', restaurantLogin);
    return this.eatoutCorporateHttpClient.post<RestaurantLogin>('login', restaurantLogin);
  }

}
