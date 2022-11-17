import {Address} from "./Address";

export interface NewRestaurantAccount {
  email: string;
  password: string;
  restaurantName: string;
  description: string;
  address: Address;
}

