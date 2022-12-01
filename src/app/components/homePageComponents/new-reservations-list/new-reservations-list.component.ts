import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ReservationStatus} from "../../../enums/enums";
import {NewReservationsWs} from "../../../services/api/new-reservations-ws";
import {ReservationStore} from "../../../services/stores/reservation-store";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";
import {RestaurantLoginResponseApiObject} from "../../../businessObjects/LoginApiObject";

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
  newReservationsObservable: Subject<Reservation[] | undefined> = new Subject<Reservation[] | undefined>();
  onDestroyed$ = new Subject<void>();

  constructor(
    private ws: NewReservationsWs,
    private reservationStore: ReservationStore,
    private restaurantStore: RestaurantAccountStore
  ){}

  ngOnInit(): void {
    const restaurant: RestaurantLoginResponseApiObject | undefined = this.restaurantStore.getRestaurantAccountLogin();
    if (restaurant) {
      this.ws.start(restaurant.id);
    }
    this.reservationStore.getReservations().pipe(
      takeUntil(this.onDestroyed$))
      .subscribe(reservations => {
        this.newReservationsObservable.next(reservations);
      })
  }

  ngOnDestroy(): void {
    this.ws.stop();
    this.onDestroyed$.complete();
  }

  acceptReservation(customerId: number) {

  }
}
