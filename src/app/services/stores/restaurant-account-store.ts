import {Injectable} from "@angular/core";
import {
  RestaurantLoginResponseApiObject,
  RestaurantMenuApiObject,
  RestaurantMenuCategoryApiObject,
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

  public updateMenu(menu: RestaurantMenuApiObject): void {
    const restaurantString = localStorage.getItem('app.restaurant');
    if (restaurantString) {
      const restaurant: RestaurantLoginResponseApiObject= JSON.parse(restaurantString);
      restaurant.menu = menu
      localStorage.setItem('app.restaurant', JSON.stringify(restaurant));
    }
  }

  public updateCategory(categories: RestaurantMenuCategoryApiObject[]): void {
    const restaurantString = localStorage.getItem('app.restaurant');
    if (restaurantString) {
      const restaurant: RestaurantLoginResponseApiObject= JSON.parse(restaurantString);
      restaurant.menu.categories = categories;
      localStorage.setItem('app.restaurant', JSON.stringify(restaurant));
    }
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
