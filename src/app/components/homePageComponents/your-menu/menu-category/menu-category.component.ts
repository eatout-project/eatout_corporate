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

  constructor() {
  }

  ngOnInit(): void {
  }

}
