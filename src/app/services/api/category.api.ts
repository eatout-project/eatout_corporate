import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {CategoryRequestApiObject, RestaurantMenuCategoryApiObject} from "../../businessObjects/LoginApiObject";

@Injectable({
  providedIn: 'root'
})
export class CategoryApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public postNewCategory(newCategory: CategoryRequestApiObject): Observable<RestaurantMenuCategoryApiObject[]>{
    return this.eatoutCorporateHttpClient.post<RestaurantMenuCategoryApiObject[]>('5000/addCategory', newCategory);
  }

  public getMenuCategories(restaurantId: number): Observable<RestaurantMenuCategoryApiObject[]> {
    return this.eatoutCorporateHttpClient.post<RestaurantMenuCategoryApiObject[]>('5000/getMenu', {id: restaurantId});
  }

}
