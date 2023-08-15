import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {ItemRequestApiObject, RestaurantMenuCategoryItemApiObject} from "../../businessObjects/LoginApiObject";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemApi {

  url: string = environment.RESTAURANT_SERVICE_HOST_URL;
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postNewItem(newItem: ItemRequestApiObject): Observable<RestaurantMenuCategoryItemApiObject[]> {
    return this.eatoutCorporateHttpClient.post<RestaurantMenuCategoryItemApiObject[]>(this.url + '/addItem', newItem);

  }
}
