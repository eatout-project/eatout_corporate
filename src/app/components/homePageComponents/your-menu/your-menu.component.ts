import {Component, OnInit} from '@angular/core';
import {
  RestaurantLoginResponseApiObject,
  RestaurantMenuCategoryApiObject
} from "../../../businessObjects/LoginApiObject";
import {BehaviorSubject, take} from "rxjs";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";
import {Router} from "@angular/router";
import {CategoryFacade} from "../../../services/facades/category.facade";

@Component({
  selector: 'app-your-menu',
  templateUrl: './your-menu.component.html',
  styleUrls: ['./your-menu.component.scss']
})
export class YourMenuComponent implements OnInit {

  restaurantData: RestaurantLoginResponseApiObject | undefined;
  restaurantMenuCategories: RestaurantMenuCategoryApiObject[] | undefined= [];
  categoryObservable: BehaviorSubject<RestaurantMenuCategoryApiObject[]> = new BehaviorSubject<RestaurantMenuCategoryApiObject[]>([]);

  constructor(private restaurantAccountStore: RestaurantAccountStore,
              private router: Router,
              private categoryFacade: CategoryFacade) {
  }

  ngOnInit(): void {
    if (this.restaurantAccountStore.getRestaurantAccountLogin()) {
      this.restaurantData = this.restaurantAccountStore.getRestaurantAccountLogin();
      if (this.restaurantData?.menu) {
        this.categoryFacade.getMenuCategories(this.restaurantData.id).pipe(take(1))
          .subscribe(categories => {
            this.restaurantMenuCategories = categories
          })
        this.restaurantMenuCategories = this.restaurantData.menu.categories;
      } else {
        this.router.navigate(["/login"]);
      }

    }
  }

}
