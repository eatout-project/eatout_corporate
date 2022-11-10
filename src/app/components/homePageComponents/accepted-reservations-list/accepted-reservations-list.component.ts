import { Component, OnInit } from '@angular/core';
import {Reservation} from "../new-reservations-list/new-reservations-list.component";

@Component({
  selector: 'app-accepted-reservations-list',
  templateUrl: './accepted-reservations-list.component.html',
  styleUrls: ['./accepted-reservations-list.component.scss']
})
export class AcceptedReservationsListComponent implements OnInit {

  reservations: Reservation[] = [
    {
      date: new Date(),
      amountOfGuests: 5,
      restaurantName: 'Pablo'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      restaurantName: 'Escobar'
    },
    {
      date: new Date(),
      amountOfGuests: 3,
      restaurantName: 'Osama'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      restaurantName: 'Bin'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      restaurantName: 'Laden'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      restaurantName: 'Vladimir'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      restaurantName: 'Putin'
    },
    {
      date: new Date(),
      amountOfGuests: 4,
      restaurantName: 'Rip'
    },
    {
      date: new Date(),
      amountOfGuests: 4,
      restaurantName: 'Rap'
    },
    {
      date: new Date(),
      amountOfGuests: 7,
      restaurantName: 'Rup'
    },
    {
      date: new Date(),
      amountOfGuests: 7,
      restaurantName: 'Will'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      restaurantName: 'Smith'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      restaurantName: 'Chris'
    },
    {
      date: new Date(),
      amountOfGuests: 5,
      restaurantName: 'Rock'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
