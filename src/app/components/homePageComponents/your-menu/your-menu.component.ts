import { Component, OnInit } from '@angular/core';
import {RestaurantMenuApiObject} from "../../../businessObjects/LoginApiObject";

@Component({
  selector: 'app-your-menu',
  templateUrl: './your-menu.component.html',
  styleUrls: ['./your-menu.component.scss']
})
export class YourMenuComponent implements OnInit {

  restaurantMenu: RestaurantMenuApiObject = {
    id: 1,
    categories: [
      {
        id: 1,
        title: 'Indian food',
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
      },
      {
        id: 2,
        title: 'Pizzas',
        items: [
          {
            name: 'Kebab pizza',
            description: 'Very good, very niiiiice! Very good, very niiiiice!' +
              'Very good, very niiiiice! Very good, very niiiiice!',
            price: 65
          },
          {
            name: 'Pepperoni pizza',
            description: 'Very good, very niiiiice! Very good, very niiiiice!' +
              'Very good, very niiiiice! Very good, very niiiiice!',
            price: 60
          }
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
