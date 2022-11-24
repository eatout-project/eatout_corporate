import {Component, Input, OnInit} from '@angular/core';
import {RestaurantMenuCategoryApiObject} from "../../../../businessObjects/LoginApiObject";

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  @Input() menuCategory: RestaurantMenuCategoryApiObject = {
    id: 0,
    title: '',
    items: []
  };

  menuCategoriesTest: RestaurantMenuCategoryApiObject = {
    id: 1,
    title: 'Drinks',
    items: [
      {
        name: 'Chicken masala',
        description: 'Very good, very niiiiice! Very good, very niiiiice!' +
          'Very good, very niiiiice! Very good, very niiiiice!',
        price: 68
      },
      {
        name: 'Vindaloo',
        description: 'Very good, very niiiiice! Very good, very niiiiice!' +
          'Very good, very niiiiice! Very good, very niiiiice!',
        price: 56
      }
    ]
}

  constructor() { }

  ngOnInit(): void {
  }

}
