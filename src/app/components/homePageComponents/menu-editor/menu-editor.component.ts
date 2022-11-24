import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";
import {BehaviorSubject, Subject, take} from "rxjs";
import {
  CategoryRequestApiObject,
  MenuRequestApiObject,
  RestaurantLoginResponseApiObject,
  RestaurantMenuCategoryApiObject, RestaurantMenuCategoryItemApiObject
} from "../../../businessObjects/LoginApiObject";
import {CategoryFacade} from "../../../services/facades/category.facade";
import {Router} from "@angular/router";
import {ItemFacade} from "../../../services/facades/item.facade";

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

  selectedCategory: RestaurantMenuCategoryApiObject | undefined = undefined;

  private onDestroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private restaurantAccountStore: RestaurantAccountStore,
              private categoryFacade: CategoryFacade,
              private itemFacade: ItemFacade,
              private router: Router) {
  }

  restaurantData: RestaurantLoginResponseApiObject | undefined;
  categoryObservable: BehaviorSubject<RestaurantMenuCategoryApiObject[]> = new BehaviorSubject<RestaurantMenuCategoryApiObject[]>([]);
  itemObservable: BehaviorSubject<RestaurantMenuCategoryItemApiObject[]> = new BehaviorSubject<RestaurantMenuCategoryItemApiObject[]>([]);


  ngOnInit(): void {
    const localStorageData = this.restaurantAccountStore.getRestaurantAccountLogin();
    if (localStorageData) {
      this.restaurantData = localStorageData;
      if (this.restaurantData?.menuCategories) {
        this.categoryObservable.next(this.restaurantData?.menuCategories);
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

        this.newCategory.reset();
      });
    } else {
      alert('Category already exist!');
    }
  }

  onSubmitItem() {
    const itemName = this.newItem.controls.name.value;
    const itemDescription = this.newItem.controls.description.value;
    const itemPrice = this.newItem.controls.price.value;

    if (this.selectedCategory && itemName && itemDescription && itemPrice) {
      const newItemObject: MenuRequestApiObject = {
        categoryId: this.selectedCategory.id,
        name: itemName,
        description: itemDescription,
        price: itemPrice
      }

      this.itemFacade.postNewItem(newItemObject).pipe(take(1)).subscribe(updatedItems => {
        console.log('UpdatedItems:', updatedItems);
        if (this.restaurantData) {
          this.restaurantData.categoryItems = updatedItems;
          this.itemObservable.next(this.restaurantData?.categoryItems);
        }
        this.newItem.reset();
        this.selectedCategory = undefined;
      })
    }
  }

  ngOnDestroy() {
    this.onDestroyed$.complete();
  }

}
