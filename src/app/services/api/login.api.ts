import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {LoginFormObject} from "../../components/loginpageComponents/loginpage-body/loginpage-body.component";
import {RestaurantLoginResponseApiObject} from "../../businessObjects/LoginApiObject";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LoginApi {

  url: string = environment.ACCOUNT_SERVICE_HOST_URL;

  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postRestaurantLogin(loginFormObject: LoginFormObject): Observable<RestaurantLoginResponseApiObject>{
    return this.eatoutCorporateHttpClient.post<RestaurantLoginResponseApiObject>(this.url + '/login', loginFormObject);
  }
}
