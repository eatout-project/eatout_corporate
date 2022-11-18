import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Reservation} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";

@Injectable({
  providedIn: 'root'
})
export class ReservationStore {

  private reservationsMapChanges = new BehaviorSubject<Reservation[]>([]);
  private reservationsMap$ = this.reservationsMapChanges.asObservable();

  updateReservations(newReservation: Reservation): void {
    const cachedReservations = localStorage.getItem('app.reservations');
    if (cachedReservations) {
      const parsedCachedReservations: Reservation[] = JSON.parse(cachedReservations);
      parsedCachedReservations.push(newReservation);
      localStorage.setItem('app.reservations', JSON.stringify(parsedCachedReservations));
      this.reservationsMapChanges.next(parsedCachedReservations);
    }
  }

  getReservations(): Observable<Reservation[]> {
    return this.reservationsMap$;
  }
}
