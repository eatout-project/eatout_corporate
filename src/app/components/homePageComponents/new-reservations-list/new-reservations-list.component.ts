import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, ReplaySubject, Subject, take, takeUntil} from "rxjs";
import {ReservationStatus} from "../../../enums/enums";
import {NewReservationsWs} from "../../../services/api/new-reservations-ws";
import {ReservationStore} from "../../../services/stores/reservation-store";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";
import {RestaurantLoginResponseApiObject} from "../../../businessObjects/LoginApiObject";
import {ReservationReplyWs} from "../../../services/api/reservation-reply-ws";
import {ReservationsApi} from "../../../services/api/reservations.api";

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
  // @ts-ignore
  newReservationsObservable: Observable<Map<number, ReservationWithId>>;
  reservationList: ReplaySubject<Map<number, ReservationWithId> | undefined> = new ReplaySubject<Map<number, ReservationWithId> | undefined>(1);
  onDestroyed$ = new Subject<void>();

  constructor(
    private newReservationsWs: NewReservationsWs,
    private replyWs: ReservationReplyWs,
    private reservationStore: ReservationStore,
    private restaurantStore: RestaurantAccountStore,
    private reservationApi: ReservationsApi
  ){}

  ngOnInit(): void {
    const restaurant: RestaurantLoginResponseApiObject | undefined = this.restaurantStore.getRestaurantAccountLogin();
    if (restaurant) {

      this.reservationApi.getWaitingReservations(restaurant.id).pipe(take(1)).subscribe((waitingReservations: ReservationWithStringDate[]) => {
        const map: Map<number, ReservationWithId> = new Map<number, ReservationWithId>();
        const array: ReservationWithId[] = [];
        waitingReservations.forEach((reservation, id) => {
          const reservation2: ReservationWithId = {
            id: reservation.id,
            customerName: reservation.customerName,
            customerId: reservation.customerId,
            restaurantId: reservation.restaurantId,
            restaurantName: reservation.restaurantName,
            status: reservation.status,
            amountOfGuests: reservation.amountOfGuests,
            timeOfArrival: new Date(JSON.parse(reservation.timeOfArrival))
          }
          array.push(reservation2);
          map.set(reservation.id, reservation2);
        })
        this.reservationList.next(map);
        this.reservationStore.storeNewReservations(array);
        this.newReservationsWs.start(restaurant.id);
      })
    }


    this.reservationStore.getNewReservations().pipe(
      takeUntil(this.onDestroyed$))
      .subscribe(reservations => {
        this.reservationList.pipe(take(1)).subscribe((currentReservations) => {
          if (currentReservations) {
            reservations.forEach(reservation => {
              currentReservations.set(reservation.id, reservation);
            })
          }
        })
        reservations.forEach(reservation => {

        })
        this.reservationList.next(reservations);
      })
  }

  ngOnDestroy(): void {
    this.newReservationsWs.stop();
    this.onDestroyed$.complete();
  }

  acceptReservation(reservation: ReservationWithId) {
    reservation.status = ReservationStatus.APPROVED;
    this.replyWs.sendMessage(reservation);
    this.reservationStore.acceptReservation(reservation);
    this.reservationApi.updateReservation(reservation).pipe(take(1)).subscribe(reservation => {
    })
  }

  declineReservation(reservation: ReservationWithId) {
    reservation.status = ReservationStatus.DECLINED;
    this.replyWs.sendMessage(reservation)
  }
}
