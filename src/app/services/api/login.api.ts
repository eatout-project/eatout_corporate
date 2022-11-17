import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {LoginFormObject} from "../../components/loginpageComponents/loginpage-body/loginpage-body.component";
import {RestaurantLoginResponseApiObject} from "../../businessObjects/LoginApiObject";


@Injectable({
  providedIn: 'root'
})
export class LoginApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postRestaurantLogin(loginFormObject: LoginFormObject): Observable<RestaurantLoginResponseApiObject>{
    return this.eatoutCorporateHttpClient.post<RestaurantLoginResponseApiObject>('5002/login', loginFormObject);
  }

}
