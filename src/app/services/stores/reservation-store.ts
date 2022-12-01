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
    const cachedReservations = localStorage.getItem('app.newReservations');
    if (cachedReservations !== null) {
      let deserialized: Reservation[] = JSON.parse(cachedReservations);
      deserialized.forEach(reservation => {
        reservation.timeOfArrival = new Date(reservation.timeOfArrival);
      })

      deserialized.push(newReservation);
      const sortedMap = this.sortObjects(deserialized);
      localStorage.setItem('app.newReservations', JSON.stringify([...sortedMap]));
      this.reservationsMapChanges.next(sortedMap);
    } else {
      const newMap: Reservation[] = [newReservation];
      localStorage.setItem('app.newReservations', JSON.stringify([...newMap]));
      this.reservationsMapChanges.next(newMap);
    }
  }

  getReservations(): Observable<Reservation[]> {
    return this.reservationsMap$;
  }


  private sortObjects(reservations: Reservation[]): Reservation[] {
    const temp: Reservation[] = reservations;
    const result: Reservation[] = [];

    // delete duplicates
    for (let i = 0; i < temp.length-1; i++) {
      for (let j = i+1; j < temp.length; j++) {
        if (!!temp[i] && !!temp[j] && temp[i] !== null && temp[j] !== null) {
          if (temp[i].customerId === temp[j].customerId && temp[i].timeOfArrival.getDate() === temp[j].timeOfArrival.getDate() && temp[i].timeOfArrival.getTime() === temp[j].timeOfArrival.getTime()) {
            delete temp[j];
          }
        }
      }
    }

    for (let i = 0; i < temp.length; i++) {
      if (!!temp[i]) {
        temp[i].timeOfArrival = new Date(temp[i].timeOfArrival);
        result.push(temp[i]);
      }
    }
    result.sort((a, b) => b.timeOfArrival.getTime() - a.timeOfArrival.getTime())

    return result;
  }
}
