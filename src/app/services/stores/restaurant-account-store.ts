import {Injectable} from "@angular/core";
import {
  RestaurantLoginResponseApiObject,
  RestaurantRegistrationResponseApiObject
} from "../../businessObjects/LoginApiObject";

@Injectable({
  providedIn: 'root'
})
export class RestaurantAccountStore {

  constructor() {
  }

  public storeRestaurantAccountRegistration(restaurantAccount: RestaurantRegistrationResponseApiObject): void {
    localStorage.setItem('app.restaurant',JSON.stringify(restaurantAccount));
  }

  public storeRestaurantAccountLogin(restaurantLogin: RestaurantLoginResponseApiObject): void {
    localStorage.setItem('app.restaurant',JSON.stringify(restaurantLogin));
  }

  public getRestaurantAccountRegistration(): RestaurantRegistrationResponseApiObject | undefined {
    const restaurant = localStorage.getItem('app.restaurant');
    if (restaurant){
      return JSON.parse(restaurant);
    } else {
      return undefined;
    }
  }

  public getRestaurantAccountLogin(): RestaurantLoginResponseApiObject | undefined {
    const restaurant = localStorage.getItem('app.restaurant');
    if (restaurant){
      return JSON.parse(restaurant);
    } else {
      return undefined;
    }
  }
}
