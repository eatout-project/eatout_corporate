import {Injectable} from "@angular/core";
import {
  ReservationWithId,
  ReservationWithStringDate
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";
import {ReservationStore} from "../stores/reservation-store";

@Injectable({
  providedIn: "root"
})
export class NewReservationsWs {

  private webSocket: WebSocket | undefined;

  constructor(private reservationStore: ReservationStore) {
  }

  public start(restaurantId: number): void {
    if (this.webSocket === undefined) {
      console.debug('Going to connect to the websockets server');
      this.connect('ws://localhost:5011', restaurantId);
    }
  }

  public stop(): void {
    if (this.webSocket != null) {
      this.webSocket.close();
    }
  }

  private connect(partialUrl: string, id: number): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      console.info('new reservation ws WebSocket connection has been opened: %o', event);
      // @ts-ignore
      this.webSocket.send(JSON.stringify(id));
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: string = messageEvent.data;
      const response: ReservationWithStringDate = JSON.parse(jsonReceived);
      let date;
      if (response.timeOfArrival.includes("\"")) {
        date = new Date(JSON.parse(response.timeOfArrival))
      }
      else {
        date = new Date(response.timeOfArrival);
      }
      const finalResponse: ReservationWithId = {
        id: response.id,
        customerName: response.customerName,
        customerId: response.customerId,
        restaurantId: response.restaurantId,
        restaurantName: response.restaurantName,
        timeOfArrival: date,
        amountOfGuests: response.amountOfGuests,
        status: response.status
      }
      this.reservationStore.storeNewReservation(finalResponse);
    };

    this.webSocket.onerror = (event: Event) => {
      console.error('new reservations WebSocket error observed: %o', event);
    };

    this.webSocket.onclose = (closeEvent: CloseEvent) => {
      this.webSocket = undefined;
    };
  }
}
