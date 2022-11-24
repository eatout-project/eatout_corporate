import {Address} from "./Address";

export interface RestaurantLogin {
  email: string;
  password: string;
}

export interface RestaurantApiObject {
  email: string;
  restaurantName: string;
  description: string;
  address: AddressApiObject;
  image?: string;
  restaurantId?: number;
  menu?: RestaurantMenuApiObject;
}

export interface RestaurantLoginResponseApiObject {
  id: number;
  email: string;
  restaurantName: string;
  description: string;
  restaurantMenu: RestaurantMenuApiObject;
  menuCategories: RestaurantMenuCategoryApiObject[];
  categoryItems: RestaurantMenuCategoryItemApiObject[];
}

export interface RestaurantRegistrationResponseApiObject {
  id: number;
  email: string;
  restaurantName: string;
  description: string;
  menuId: number;
}

export interface RestaurantRegistrationRequestApiObject {
  email: string;
  password: string;
  restaurantName: string;
  description: string;
  address: Address
}

export interface RestaurantMenuApiObject {
  id: number;
  categories?: RestaurantMenuCategoryApiObject[];
}

export interface RestaurantMenuCategoryApiObject {
  id: number;
  title: string;
  items: RestaurantMenuCategoryItemApiObject[]
}

export interface CategoryRequestApiObject {
  restaurantId: number;
  menuId: number;
  categoryTitle: string;
}

export interface MenuRequestApiObject {
  categoryId: number;
  name: string;
  description: string;
  price: number;
}

export interface RestaurantMenuCategoryItemApiObject {
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface ItemRequestApiObject {
  categoryId: number;
  name: string;
  description: string;
  price: number;
}

export interface AddressApiObject {
  restaurantId: number;
  streetName: string;
  houseNumber: number;
  zipCode: number;
  city: string;
  floor?: number;
}

export interface AddressResponseApiObject {
  id: number;
  restaurantId: number;
  streetName: string;
  houseNumber: number;
  zipCode: number;
  city: string;
  floor?: number;
}

export interface LoginApiObject {
  id: number;
  email: string;
  restaurantName: string;
  description: string;
}
