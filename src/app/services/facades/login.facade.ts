import {Injectable} from "@angular/core";
import {LoginApi} from "../api/login.api";
import {LoginFormObject} from "../../components/loginpageComponents/loginpage-body/loginpage-body.component";
import {Observable} from "rxjs";
import {RestaurantLoginResponseApiObject} from "../../businessObjects/LoginApiObject";


@Injectable()
export class LoginFacade {
  constructor(private loginApi: LoginApi) {
  }

  public postRestaurantLogin(loginFormObject: LoginFormObject): Observable<RestaurantLoginResponseApiObject>{
    return this.loginApi.postRestaurantLogin(loginFormObject);
  }

}
