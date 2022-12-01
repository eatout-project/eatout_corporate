import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {ItemRequestApiObject, RestaurantMenuCategoryItemApiObject} from "../../businessObjects/LoginApiObject";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postNewItem(newItem: ItemRequestApiObject): Observable<RestaurantMenuCategoryItemApiObject[]> {
    return this.eatoutCorporateHttpClient.post<RestaurantMenuCategoryItemApiObject[]>('5000/addItem', newItem);

  }
}
