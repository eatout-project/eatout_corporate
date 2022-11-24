import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ReservationStatus} from "../../../enums/enums";
import {NewReservationsWs} from "../../../services/api/new-reservations-ws";
import {ReservationStore} from "../../../services/stores/reservation-store";

export interface Reservation {
  customerName: string;
  customerId: number;
  restaurantId: number;
  restaurantName: string;
  timeOfArrival: Date;
  amountOfGuests: number;
  status: ReservationStatus;
}

export interface ReservationApi {
  customerName: string;
  customerId: number;
  restaurantId: number;
  restaurantName: string;
  timeOfArrival: string;
  amountOfGuests: number;
  status: ReservationStatus;
}

@Component({
  selector: 'app-new-reservations-list',
  templateUrl: './new-reservations-list.component.html',
  styleUrls: ['./new-reservations-list.component.scss']
})
export class NewReservationsListComponent implements OnInit, OnDestroy {

  /*reservations: Reservation[] = [
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

   */

  newReservations: Reservation[] = [];
  newReservationsObservable: Subject<Reservation[] | undefined> = new Subject<Reservation[] | undefined>();

  onDestroyed$ = new Subject<void>();

  constructor(private ws: NewReservationsWs, private reservationStore: ReservationStore) {
  }

  ngOnInit(): void {
    this.ws.start();
    this.reservationStore.getReservations().pipe(takeUntil(this.onDestroyed$)).subscribe(reservations => {
      this.newReservations = reservations;
      this.newReservationsObservable.next(reservations);
    });
  }

  ngOnDestroy(): void {
    this.ws.stop();
    this.onDestroyed$.complete();
  }
}
