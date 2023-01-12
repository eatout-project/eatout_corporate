import {Component, OnInit} from '@angular/core';
import {ReservationWithId} from "../new-reservations-list/new-reservations-list.component";
import {BehaviorSubject, Subject, take, takeUntil} from "rxjs";
import {ReservationStore} from "../../../services/stores/reservation-store";
import {ReservationsApi} from "../../../services/api/reservations.api";
import {RestaurantLoginResponseApiObject} from "../../../businessObjects/LoginApiObject";
import {RestaurantAccountStore} from "../../../services/stores/restaurant-account-store";

@Component({
  selector: 'app-accepted-reservations-list',
  templateUrl: './accepted-reservations-list.component.html',
  styleUrls: ['./accepted-reservations-list.component.scss']
})
export class AcceptedReservationsListComponent implements OnInit {

  acceptedReservationsObservable: BehaviorSubject<Map<number, ReservationWithId>> = new BehaviorSubject<Map<number, ReservationWithId>>(new Map<number, ReservationWithId>);
  onDestroyed$ = new Subject<void>();

  constructor(private reservationStore: ReservationStore, private restaurantStore: RestaurantAccountStore, private reservationApi: ReservationsApi) { }

  ngOnInit(): void {
    const restaurant: RestaurantLoginResponseApiObject | undefined = this.restaurantStore.getRestaurantAccountLogin();
    if (restaurant) {
      this.reservationApi.getAcceptedReservations(restaurant.id).pipe(take(1)).subscribe(acceptedReservations => {
        const map = new Map<number, ReservationWithId>;
        acceptedReservations.forEach(acceptedReservation => {
          acceptedReservation.timeOfArrival = new Date(acceptedReservation.timeOfArrival);
          map.set(acceptedReservation.id, acceptedReservation);
        })
        this.acceptedReservationsObservable.next(map);
        this.reservationStore.storeAcceptedReservations(acceptedReservations);
      })
    }

    this.reservationStore.getAcceptedReservations().pipe(takeUntil(this.onDestroyed$)).subscribe(map => {
      this.acceptedReservationsObservable.next(map);
    })
  }

}
