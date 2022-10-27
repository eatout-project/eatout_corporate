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
      name: 'Pablo'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      name: 'Escobar'
    },
    {
      date: new Date(),
      amountOfGuests: 3,
      name: 'Osama'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      name: 'Bin'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      name: 'Laden'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      name: 'Vladimir'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      name: 'Putin'
    },
    {
      date: new Date(),
      amountOfGuests: 4,
      name: 'Rip'
    },
    {
      date: new Date(),
      amountOfGuests: 4,
      name: 'Rap'
    },
    {
      date: new Date(),
      amountOfGuests: 7,
      name: 'Rup'
    },
    {
      date: new Date(),
      amountOfGuests: 7,
      name: 'Will'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      name: 'Smith'
    },
    {
      date: new Date(),
      amountOfGuests: 2,
      name: 'Chris'
    },
    {
      date: new Date(),
      amountOfGuests: 5,
      name: 'Rock'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
