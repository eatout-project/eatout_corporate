import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {SelectedMenu} from "../../enums/enums";
import {RestaurantAccountStore} from "../../services/stores/restaurant-account-store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  reservationSelected: Subject<boolean> = new BehaviorSubject<boolean>(true);
  menuSelected: Subject<boolean> = new BehaviorSubject<boolean>(false);
  yourMenuSelected: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private restaurantAccountStore: RestaurantAccountStore, private router: Router) { }

  ngOnInit(): void {
    if (!this.restaurantAccountStore.getRestaurantAccountLogin()) {
      this.router.navigate(["/"]);
    }
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
