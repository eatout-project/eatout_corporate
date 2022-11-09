import {Injectable} from "@angular/core";
import {LoginApi} from "../api/login.api";
import {LoginFormObject} from "../../components/loginpageComponents/loginpage-body/loginpage-body.component";
import {Observable} from "rxjs";
import {RestaurantLogin} from "../../businessObjects/RestaurantLogin";


@Injectable()
export class LoginFacade {
  constructor(private loginApi: LoginApi) {
  }

  public postRestaurantLogin(loginFormObject: LoginFormObject): Observable<RestaurantLogin>{
    console.log('Hej1', loginFormObject);
    return this.loginApi.postRestaurantLogin(loginFormObject);
  }

}
