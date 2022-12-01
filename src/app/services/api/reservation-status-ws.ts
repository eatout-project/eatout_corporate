import {Injectable} from "@angular/core";
import {ReservationStore} from "../stores/reservation-store";
import {
  Reservation,
  ReservationApi
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";

@Injectable({
  providedIn: "root"
})
export class ReservationStatusWs {
  // @ts-ignore
  private webSocket: WebSocket;

  constructor(private reservationStore: ReservationStore) {
  }

  public start(customerId: number): void {
    if (this.webSocket === undefined) {
      console.debug('Going to connect to the websockets server');
      this.connect('ws://localhost:5013', customerId);
    }
  }

  public stop(): void {
    if (this.webSocket != null) {
      this.webSocket.close();
    }
  }

  private connect(partialUrl: string, customerId: number): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      console.info('WebSocket connection has been opened: %o', event);
      this.webSocket.send(JSON.stringify({customerId: customerId}));
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: string = messageEvent.data;
      if (jsonReceived.includes('status')) {
        const response: ReservationApi = JSON.parse(jsonReceived);
        const reservation = this.reservationApiObjectToReservation(response);
        this.reservationStore.updateReservations(reservation);
      }
    };

    this.webSocket.onerror = (event: Event) => {
      console.error('WebSocket error observed: %o', event);
    };

    this.webSocket.onclose = (closeEvent: CloseEvent) => {
      console.info('WebSocket connection has been closed: %o', closeEvent);
    };
  }

  reservationApiObjectToReservation(reservationApiObject: ReservationApi): Reservation {
    const timeOfArrival = new Date(reservationApiObject.timeOfArrival);
    const { customerName, customerId, restaurantId, restaurantName, amountOfGuests, status} = reservationApiObject;
    return {
      customerName,
      customerId,
      restaurantId,
      restaurantName,
      amountOfGuests,
      status,
      timeOfArrival
    }
  }
}
