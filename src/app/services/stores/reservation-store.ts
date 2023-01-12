import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, take} from "rxjs";
import {
  ReservationWithId
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";

@Injectable({
  providedIn: 'root'
})
export class ReservationStore {

  private newReservationsMapChanges = new BehaviorSubject<Map<number, ReservationWithId>>(new Map<number, ReservationWithId>);
  private acceptedReservationsMapChanges = new BehaviorSubject<Map<number, ReservationWithId>>(new Map<number, ReservationWithId>);

  private newReservationsMap$ = this.newReservationsMapChanges.asObservable();
  private acceptedReservationsMap$ = this.acceptedReservationsMapChanges.asObservable();

  constructor() {
  }

  storeNewReservation(newReservation: ReservationWithId): void {

    this.newReservationsMap$.pipe(take(1)).subscribe(waitingReservations => {
      this.acceptedReservationsMap$.pipe(take(1)).subscribe(acceptedReservations => {
        if (!acceptedReservations.has(newReservation.id)) {
          waitingReservations.set(newReservation.id, newReservation);
        }
        this.newReservationsMapChanges.next(waitingReservations);
      })
    })
  }

  getNewReservations(): Observable<Map<number, ReservationWithId>> {
    return this.newReservationsMap$;
  }

  acceptReservation(reservation: ReservationWithId): void {
    this.acceptedReservationsMap$.pipe(take(1)).subscribe(acceptedReservations => {
      acceptedReservations.set(reservation.id, reservation);
      this.acceptedReservationsMapChanges.next(acceptedReservations);
      this.newReservationsMap$.pipe(take(1)).subscribe(waitingReservations => {
        const updatedReservations: ReservationWithId[] = [];
        const newMap = new Map<number, ReservationWithId>();
        waitingReservations.forEach((value: ReservationWithId, key: number) => {
          if (value.id !== reservation.id) {
            newMap.set(value.id, value);
            updatedReservations.push(value);
          }
        })
        this.updateNewReservations2(updatedReservations);
        this.newReservationsMapChanges.next(newMap);
      })
    })
  }

  updateNewReservations2(reservations: ReservationWithId[]): void {
    const newMap = new Map<number, ReservationWithId>();
    reservations.forEach((value: ReservationWithId, key: number) => {
      newMap.set(value.id, value);
    })
    this.newReservationsMapChanges.next(newMap);
  }


  storeAcceptedReservations(reservations: ReservationWithId[]): void {
    const map: Map<number, ReservationWithId> = new Map<number, ReservationWithId>();
    reservations.forEach(reservation => {
      map.set(reservation.id, reservation);
    })
    this.acceptedReservationsMapChanges.next(map);
  }

  getAcceptedReservations(): Observable<Map<number, ReservationWithId>> {
    return this.acceptedReservationsMap$;
  }


  storeNewReservations(reservations: ReservationWithId[]) {
    const map: Map<number, ReservationWithId> = new Map<number, ReservationWithId>();
    reservations.forEach(reservation => {
      map.set(reservation.id, reservation);
    })
    this.newReservationsMapChanges.next(map);
  }
}
