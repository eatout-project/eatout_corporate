import {Component, Input, OnInit} from '@angular/core';
import {RestaurantMenuCategoryItemApiObject} from "../../../../businessObjects/LoginApiObject";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() categoryItem: RestaurantMenuCategoryItemApiObject = {
    name: '',
    description: '',
    price: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
