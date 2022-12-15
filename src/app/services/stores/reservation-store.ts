import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, take} from "rxjs";
import {
  ReservationWithId
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";

@Injectable({
  providedIn: 'root'
})
export class ReservationStore {

  private reservationsMapChanges = new BehaviorSubject<Map<number, ReservationWithId>>(new Map<number, ReservationWithId>);
  private acceptedReservationsMapChanges = new BehaviorSubject<Map<number, ReservationWithId>>(new Map<number, ReservationWithId>);
  private reservationsMap$ = this.reservationsMapChanges.asObservable();
  private acceptedReservationsMap$ = this.acceptedReservationsMapChanges.asObservable();

  updateNewReservations(newReservation: ReservationWithId): void {
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
      reservations.delete(reservation.id);
      this.reservationsMapChanges.next(reservations);
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
