import {Injectable} from "@angular/core";
import {ReservationWithId} from "../../components/homePageComponents/new-reservations-list/new-reservations-list.component";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ReservationReplyWs {

  constructor() {
  }

  public sendMessage(reservation: ReservationWithId): void {
    const ws = new WebSocket(environment.RESTAURANT_REPLY_SOCKET_HOST_URL);
    ws.onopen = (event: Event) => {
      ws.send(JSON.stringify(reservation));
      ws.close();
    };

    ws.onerror = (event: Event) => {
      if (ws !== undefined){
        ws.close(0);
      }
    }
  }
}
