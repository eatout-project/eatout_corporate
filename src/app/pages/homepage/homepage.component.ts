import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {SelectedMenu} from "../../enums/enums";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  reservationSelected: Subject<boolean> = new BehaviorSubject<boolean>(true);
  menuSelected: Subject<boolean> = new BehaviorSubject<boolean>(false);
  yourMenuSelected: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  setReservationIsSelected(selectedMenu: SelectedMenu): void {
    switch (selectedMenu) {
      case SelectedMenu.RESERVATIONS:
        this.reservationSelected.next(true);
        this.menuSelected.next(false);
        this.yourMenuSelected.next(false);
        break;

      case SelectedMenu.MENUEDITOR:
        this.reservationSelected.next(false);
        this.menuSelected.next(true);
        this.yourMenuSelected.next(false);
        break;

      case SelectedMenu.YOURMENU:
        this.reservationSelected.next(false);
        this.menuSelected.next(false);
        this.yourMenuSelected.next(true);
        break;
    }
  }

}
