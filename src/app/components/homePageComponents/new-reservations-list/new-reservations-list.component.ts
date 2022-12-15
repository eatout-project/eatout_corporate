import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {ReservationStatus} from "../../../enums/enums";
import {NewReservationsWs} from "../../../services/api/new-reservations-ws";
import {ReservationStore} from "../../../services/stores/reservation-store";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";
import {RestaurantLoginResponseApiObject} from "../../../businessObjects/LoginApiObject";
import {ReservationReplyWs} from "../../../services/api/reservation-reply-ws";

export interface Reservation {
  customerName: string;
  customerId: number;
  restaurantId: number;
  restaurantName: string;
  timeOfArrival: Date;
  amountOfGuests: number;
  status: ReservationStatus;
}

export interface ReservationWithStringDate {
  id: number;
  customerName: string;
  customerId: number;
  restaurantId: number;
  restaurantName: string;
  timeOfArrival: string;
  amountOfGuests: number;
  status: ReservationStatus;
}

export interface ReservationWithId {
  id: number;
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
  newReservationsObservable: Subject<Map<number, ReservationWithId> | undefined> = new Subject<Map<number, ReservationWithId> | undefined>();
  test: BehaviorSubject<Map<number, ReservationWithId> | undefined> = new BehaviorSubject<Map<number, ReservationWithId> | undefined>(new Map<number, ReservationWithId>());
  onDestroyed$ = new Subject<void>();

  constructor(
    private newReservationsWs: NewReservationsWs,
    private replyWs: ReservationReplyWs,
    private reservationStore: ReservationStore,
    private restaurantStore: RestaurantAccountStore
  ){}

  ngOnInit(): void {
    this.newReservationsObservable.subscribe(update => {
      update?.forEach(reservation => {
        console.log(reservation);
      })
    })
    const restaurant: RestaurantLoginResponseApiObject | undefined = this.restaurantStore.getRestaurantAccountLogin();
    if (restaurant) {
      console.log('restaurantId: ', restaurant.id)
      this.newReservationsWs.start(restaurant.id);
    }
    this.reservationStore.getNewReservations().pipe(
      takeUntil(this.onDestroyed$))
      .subscribe(reservations => {
        console.log('reservations in new list: ', reservations)
        this.test.next(reservations);
      })
  }

  ngOnDestroy(): void {
    this.newReservationsWs.stop();
    this.onDestroyed$.complete();
  }

  acceptReservation(reservation: ReservationWithId) {
    reservation.status = ReservationStatus.APPROVED;
    this.replyWs.sendMessage(reservation);
    this.reservationStore.updateAcceptedReservations(reservation);
  }

  declineReservation(reservation: ReservationWithId) {
    reservation.status = ReservationStatus.DECLINED;
    this.replyWs.sendMessage(reservation)
  }
}
