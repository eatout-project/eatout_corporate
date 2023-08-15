import {Injectable} from "@angular/core";
import {EatoutCorporateHttpClient} from "../eatout-corporate-http-client";
import {Observable} from "rxjs";
import {
  ReservationWithId, ReservationWithStringDate
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationsApi {

  url: string = environment.RESERVATION_SERVICE_HOST_URL;

  constructor(private readonly eatoutCorporateHttpClient: EatoutCorporateHttpClient) {
  }

  public updateReservation(reservation: ReservationWithId): Observable<ReservationWithId>{
    return this.eatoutCorporateHttpClient.post<ReservationWithId>(this.url + '/updateReservationRequest', reservation);
  }

  public getAcceptedReservations(restaurantId: number): Observable<ReservationWithId[]>{
    return this.eatoutCorporateHttpClient.post<ReservationWithId[]>(this.url + '/getAcceptedReservations', {id: restaurantId});
  }

  public getWaitingReservations(restaurantId: number): Observable<ReservationWithStringDate[]>{
    return this.eatoutCorporateHttpClient.post<ReservationWithStringDate[]>(this.url + '/getWaitingReservations', {id: restaurantId});
  }

}
