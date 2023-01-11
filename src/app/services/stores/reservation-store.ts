import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, ReplaySubject, take} from "rxjs";
import {
  ReservationWithId
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";

@Injectable({
  providedIn: 'root'
})
export class ReservationStore {

  private reservationsMapChanges = new ReplaySubject<Map<number, ReservationWithId>>(1);
  private acceptedReservationsMapChanges = new BehaviorSubject<Map<number, ReservationWithId>>(new Map<number, ReservationWithId>);
  private reservationsMap$ = this.reservationsMapChanges.asObservable();
  private acceptedReservationsMap$ = this.acceptedReservationsMapChanges.asObservable();

  constructor() {
    this.reservationsMapChanges.next(new Map<number, ReservationWithId>);
  }

  updateNewReservations(newReservation: ReservationWithId): void {
    console.log('something')
    this.reservationsMap$.pipe(take(1)).subscribe(reservations => {
      reservations.set(newReservation.id, newReservation);
      this.reservationsMapChanges.next(reservations);
    })
  }

  updateAcceptedReservations(reservation: ReservationWithId): void {

    this.acceptedReservationsMap$.pipe(take(1)).subscribe(reservations => {
      console.log(reservations);
      reservations.set(reservation.id, reservation);
      this.acceptedReservationsMapChanges.next(reservations);
    })
    this.reservationsMap$.pipe(take(1)).subscribe(reservations => {
      console.log('store checking reservations')
      const newMap = new Map<number, ReservationWithId>();
      reservations.forEach((value: ReservationWithId, key: number) => {
        if (value.id !== reservation.id) {
          console.log('value: ', value)
          newMap.set(value.id, value);
        }
      })
      console.log('newMap: ', newMap)
      this.reservationsMapChanges.next(newMap);
    })
  }

  updateDeletedReservations(reservation: ReservationWithId): void {
    this.reservationsMap$.pipe(take(1)).subscribe(reservations => {
      reservations.delete(reservation.id);
      this.reservationsMapChanges.next(reservations);
    })
  }

  getNewReservations(): Observable<Map<number, ReservationWithId>> {
    return this.reservationsMap$;
  }

  getAcceptedReservations(): Observable<Map<number, ReservationWithId>> {
    return this.acceptedReservationsMap$;
  }


}
