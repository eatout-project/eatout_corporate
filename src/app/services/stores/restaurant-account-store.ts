import {RestaurantAccount} from "../../businessObjects/RestaurantAccount";
import {Observable, ReplaySubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RestaurantAccountStore {
  private restaurantAccountMapSource = new ReplaySubject<RestaurantAccount>(1);
  private restaurantAccountMap$ = this.restaurantAccountMapSource.asObservable();

  constructor() {
  }

  public storeRestaurantAccount(restaurantAccount: RestaurantAccount): void {
    this.restaurantAccountMapSource.next(restaurantAccount);
  }

  public getRestaurantAccount(): Observable<RestaurantAccount> {
    return this.restaurantAccountMap$;
  }
}
