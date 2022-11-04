import {Address} from "./Address";

export interface RestaurantAccount {
  email: string;
  password: string;
  name: string;
  description: string;
  address: Address;
}
