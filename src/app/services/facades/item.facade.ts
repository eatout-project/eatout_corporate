import {Injectable} from "@angular/core";
import {ItemRequestApiObject, RestaurantMenuCategoryItemApiObject} from "../../businessObjects/LoginApiObject";
import {Observable} from "rxjs";
import {ItemApi} from "../api/item.api";

@Injectable()
export class ItemFacade {

  constructor(private itemApi: ItemApi) {
  }

  public postNewItem(newItem: ItemRequestApiObject): Observable<RestaurantMenuCategoryItemApiObject[]>{
    return this.itemApi.postNewItem(newItem);
  }

}
