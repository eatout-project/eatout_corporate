import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {SelectedMenu} from "../../enums/enums";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  selectedMenu = SelectedMenu;
  menuSelected: Subject<boolean> = new BehaviorSubject<boolean>(false);
  reservationSelected: Subject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  ngOnInit(): void {
  }

  setReservationIsSelected(selectedMenu: SelectedMenu): void {
    if (selectedMenu === SelectedMenu.RESERVATIONS){
      this.reservationSelected.next(true);
      this.menuSelected.next(false);
    } else {
      this.reservationSelected.next(false);
      this.menuSelected.next(true);
    }
  }

}
