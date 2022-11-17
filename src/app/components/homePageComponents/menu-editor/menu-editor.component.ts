import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";
import {BehaviorSubject, Subject, take} from "rxjs";
import {
  CategoryRequestApiObject,
  RestaurantLoginResponseApiObject,
  RestaurantMenuCategoryApiObject
} from "../../../businessObjects/LoginApiObject";
import {CategoryFacade} from "../../../services/facades/category.facade";
import {Router} from "@angular/router";

export interface NewCategoryObject {
  restaurantId: number;
  category: string;
}

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss']
})
export class MenuEditorComponent implements OnInit, OnDestroy {

  public selected = 'option2';

  private onDestroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private restaurantAccountStore: RestaurantAccountStore,
              private categoryFacade: CategoryFacade,
              private router: Router) {
  }

  restaurantData: RestaurantLoginResponseApiObject | undefined;
  categoryObservable: BehaviorSubject<RestaurantMenuCategoryApiObject[]> = new BehaviorSubject<RestaurantMenuCategoryApiObject[]>([]);


  ngOnInit(): void {
    const localStorageData = this.restaurantAccountStore.getRestaurantAccountLogin();
    if (localStorageData){
      this.restaurantData = localStorageData;
      if (this.restaurantData?.menuCategories) {
        this.categoryObservable.next(this.restaurantData?.menuCategories)
      }
    } else {
      this.router.navigate(["/login"]);
    }
  }

  newCategory = this.formBuilder.group({
    category: ''
  });

  newItem = this.formBuilder.group({
    name: [''],
    description: [''],
    price: []
  });


  onSubmitCategory() {
    const category = this.newCategory.controls.category.value;

    if (category && this.restaurantData) {
      const newCategoryObject: CategoryRequestApiObject = {
        restaurantId: this.restaurantData.id,
        menuId: this.restaurantData.restaurantMenu.id,
        categoryTitle: category
      }
      this.categoryFacade.postNewCategory(newCategoryObject).pipe(take(1)).subscribe(updatedCategories => {
        if (this.restaurantData) {
          this.restaurantData.menuCategories = updatedCategories;
          this.categoryObservable.next(this.restaurantData?.menuCategories);
        }
      });
    } else {
      alert('Category already exist!');
    }
  }

  onSubmitItem() {
  }

  ngOnDestroy() {
    this.onDestroyed$.complete();
  }

}
