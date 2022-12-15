import {Component, OnInit} from '@angular/core';
import {Reservation} from "../new-reservations-list/new-reservations-list.component";
import {Subject, takeUntil} from "rxjs";
import {ReservationStore} from "../../../services/stores/reservation-store";

@Component({
  selector: 'app-accepted-reservations-list',
  templateUrl: './accepted-reservations-list.component.html',
  styleUrls: ['./accepted-reservations-list.component.scss']
})
export class AcceptedReservationsListComponent implements OnInit {

  acceptedReservationsObservable: Subject<Map<number, Reservation> | undefined> = new Subject<Map<number, Reservation> | undefined>();
  onDestroyed$ = new Subject<void>();

  constructor(private reservationStore: ReservationStore) { }

  ngOnInit(): void {
    this.reservationStore.getAcceptedReservations().pipe(takeUntil(this.onDestroyed$)).subscribe(map => {
      this.acceptedReservationsObservable.next(map);
    })
  }

}
