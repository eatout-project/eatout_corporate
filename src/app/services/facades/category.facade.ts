import {Injectable} from "@angular/core";
import {CategoryApi} from "../api/category.api";
import {Observable} from "rxjs";
import {CategoryRequestApiObject, RestaurantMenuCategoryApiObject} from "../../businessObjects/LoginApiObject";

@Injectable()
export class CategoryFacade {

  constructor(private categoryApi: CategoryApi) {
  }

  public postNewCategory(newCategory: CategoryRequestApiObject): Observable<RestaurantMenuCategoryApiObject[]> {
    return this.categoryApi.postNewCategory(newCategory);
  }

  public getMenuCategories(restaurantId: number): Observable<RestaurantMenuCategoryApiObject[]> {
    return this.categoryApi.getMenuCategories(restaurantId);
  }

}
