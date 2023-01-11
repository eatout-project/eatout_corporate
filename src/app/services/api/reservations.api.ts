import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {
  ReservationWithId
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";

@Injectable({
  providedIn: 'root'
})
export class ReservationsApi {
  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public updateReservation(reservation: ReservationWithId): Observable<ReservationWithId>{
    return this.eatoutCorporateHttpClient.post<ReservationWithId>('http://localhost:5001/updateReservationRequest', reservation);
  }

}
