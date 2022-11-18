import { Component, OnInit } from '@angular/core';
import {Reservation} from "../new-reservations-list/new-reservations-list.component";
import {ReservationStatus} from "../../../enums/enums";

@Component({
  selector: 'app-accepted-reservations-list',
  templateUrl: './accepted-reservations-list.component.html',
  styleUrls: ['./accepted-reservations-list.component.scss']
})
export class AcceptedReservationsListComponent implements OnInit {

  reservations: Reservation[] = [
    {
      customerName: 'pablo',
      customerId: 1,
      restaurantId: 1,
      restaurantName: 'Pablos',
      timeOfArrival: new Date(),
      amountOfGuests: 5,
      status: ReservationStatus.APPROVED,
    },
    {
      customerName: 'pablo2',
      customerId: 2,
      restaurantId: 2,
      restaurantName: 'Pablos2',
      timeOfArrival: new Date(),
      amountOfGuests: 2,
      status: ReservationStatus.APPROVED,
    },
    {
      customerName: 'pablo3',
      customerId: 3,
      restaurantId: 3,
      restaurantName: 'Pablos3',
      timeOfArrival: new Date(),
      amountOfGuests: 3,
      status: ReservationStatus.APPROVED,
    },
    {
      customerName: 'pablo4',
      customerId: 4,
      restaurantId: 4,
      restaurantName: 'Pablos4',
      timeOfArrival: new Date(),
      amountOfGuests: 4,
      status: ReservationStatus.APPROVED,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
