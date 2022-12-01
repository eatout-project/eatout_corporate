import {Injectable} from "@angular/core";
import {
  ReservationApi
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";
import {ReservationStore} from "../stores/reservation-store";

@Injectable({
  providedIn: "root"
})
export class NewReservationsWs {

  // @ts-ignore
  private webSocket: WebSocket;

  constructor(private reservationStore: ReservationStore) {
  }

  public start(restaurantId: number): void {
    if (this.webSocket === undefined) {
      this.connect('ws://localhost:5011', restaurantId);
    }
  }

  public stop(): void {
    if (this.webSocket != null) {
      this.webSocket.close();
    }
  }

  private connect(partialUrl: string, restaurantId: number): void {
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      console.info('WebSocket connection has been opened: %o', event);
      this.webSocket.send(JSON.stringify({restaurantId: restaurantId}));
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: string = messageEvent.data;
      if (jsonReceived.includes('customerId')) {
        const response: ReservationApi = JSON.parse(jsonReceived);
        const finalResponse = {
          customerName: response.customerName,
          customerId: response.customerId,
          restaurantId: response.restaurantId,
          restaurantName: response.restaurantName,
          timeOfArrival: new Date(JSON.parse(response.timeOfArrival)),
          amountOfGuests: response.amountOfGuests,
          status: response.status
        }
        this.reservationStore.updateReservations(finalResponse);
      }
    };

    this.webSocket.onerror = (event: Event) => {
      console.error('WebSocket error observed: %o', event);
    };

    this.webSocket.onclose = (closeEvent: CloseEvent) => {
      console.info('WebSocket connection has been closed: %o', closeEvent);
    };
  }
}
