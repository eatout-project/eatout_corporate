import {Component, OnInit} from '@angular/core';

export interface Reservation {
  date: Date;
  amountOfGuests: number;
  name: string
}

@Component({
  selector: 'app-new-reservations-list',
  templateUrl: './new-reservations-list.component.html',
  styleUrls: ['./new-reservations-list.component.scss']
})
export class NewReservationsListComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit(): void {
  }


}
