import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";
import {BehaviorSubject, Subject, take} from "rxjs";
import {
  CategoryRequestApiObject,
  MenuRequestApiObject,
  RestaurantLoginResponseApiObject,
  RestaurantMenuCategoryApiObject
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

  ngOnInit(): void {
    const localStorageData = this.restaurantAccountStore.getRestaurantAccountLogin();
    if (localStorageData) {
      this.restaurantData = localStorageData;
      if (this.restaurantData?.menu.categories) {
        this.categoryObservable.next(this.restaurantData?.menu.categories);
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
        menuId: this.restaurantData.menu.id,
        title: category
      }
      this.categoryFacade.postNewCategory(newCategoryObject).pipe(take(1)).subscribe(updatedCategories => {
        if (this.restaurantData) {
          this.restaurantData.menu.categories = updatedCategories;
          this.categoryObservable.next(this.restaurantData?.menu.categories);
          this.restaurantAccountStore.updateCategory(this.restaurantData.menu.categories);
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
        if (this.restaurantData) {
          this.restaurantData.menu.categories?.forEach(category => {
            updatedItems.forEach(item => {
              if (item.categoryId === category.id) {
                if (category.items) {
                  category.items.push(item);
                } else {
                  category.items = [item];
                }
              }
            })
          })
          this.restaurantAccountStore.updateMenu(this.restaurantData.menu);
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
