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

  // @ts-ignore
  private webSocket: WebSocket;

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
    console.log('partialURL',partialUrl);
    this.webSocket = new WebSocket(partialUrl);

    this.webSocket.onopen = (event: Event) => {
      console.info('WebSocket connection has been opened: %o', event);
      this.webSocket.send(JSON.stringify(id));
    };

    this.webSocket.onmessage = (messageEvent: MessageEvent) => {
      const jsonReceived: string = messageEvent.data;
      console.log('received: ', jsonReceived)
      if (jsonReceived.includes('customerId')) {
        const response: ReservationWithStringDate = JSON.parse(jsonReceived);
        console.log('here to test: ', response)
        console.log(response.timeOfArrival);
        let date;
        if (response.timeOfArrival.includes("\"")) {
          date = new Date(JSON.parse(response.timeOfArrival))
        }
        else {
          date = new Date(response.timeOfArrival);
        }
        console.log(date)
        console.log(Date.parse(response.timeOfArrival))
        console.log('response: ', response)
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
        this.reservationStore.updateNewReservations(finalResponse);
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
