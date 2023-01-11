import {Injectable} from "@angular/core";
import {
  ReservationWithId
} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";

@Injectable({
  providedIn: "root"
})
export class ReservationReplyWs {

  constructor() {
  }

  public sendMessage(reservation: ReservationWithId): void {
    const ws = new WebSocket("ws://localhost:5012");

    ws.onopen = (event: Event) => {
      console.info('WebSocket connection has been opened: %o', event);
      ws.send(JSON.stringify(reservation));
      setTimeout(() => {
        ws.close();
      }, 3000)
    };

    ws.onerror = (event: Event) => {
      if (ws !== undefined){
        ws.close(0);
      }
    }
  }
}
