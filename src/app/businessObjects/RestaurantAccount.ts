import {Address} from "./Address";

export interface RestaurantAccount {
  email: string;
  password: string;
  restaurantName: string;
  description: string;
  address: Address;
}
