import {Injectable} from "@angular/core";
import {CategoryApi} from "../api/category.api";
import {Observable} from "rxjs";
import {CategoryRequestApiObject, RestaurantMenuCategoryApiObject} from "../../businessObjects/LoginApiObject";

@Injectable()
export class CategoryFacade {

  constructor(private categoryApi: CategoryApi) {
  }

  public postNewCategory(newCategory: CategoryRequestApiObject): Observable<RestaurantMenuCategoryApiObject[]>{
    console.log('Post1')
    return this.categoryApi.postNewCategory(newCategory);
  }
}
