import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {CategoryRequestApiObject, RestaurantMenuCategoryApiObject} from "../../businessObjects/LoginApiObject";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryApi {

  url: string = environment.RESTAURANT_SERVICE_HOST_URL;

  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postNewCategory(newCategory: CategoryRequestApiObject): Observable<RestaurantMenuCategoryApiObject[]>{
    return this.eatoutCorporateHttpClient.post<RestaurantMenuCategoryApiObject[]>(this.url + '/addCategory', newCategory);
  }

  public getMenuCategories(restaurantId: number): Observable<RestaurantMenuCategoryApiObject[]> {
    return this.eatoutCorporateHttpClient.post<RestaurantMenuCategoryApiObject[]>(this.url + '/getMenu', {id: restaurantId});
  }

}
