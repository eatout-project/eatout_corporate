import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectedMenu} from "../../../enums/enums";

@Component({
  selector: 'app-homepage-side-navbar',
  templateUrl: './homepage-side-navbar.component.html',
  styleUrls: ['./homepage-side-navbar.component.scss']
})
export class HomepageSideNavbarComponent implements OnInit {

  constructor() { }

  selectedMenu = SelectedMenu;
  menuSelected: string = this.selectedMenu.RESERVATIONS;

  @Output()
  selected = new EventEmitter<SelectedMenu>();

  ngOnInit(): void {
  }

  onClick(selectedMenu: SelectedMenu): void {
    this.selected.emit(selectedMenu);
    this.menuSelected = selectedMenu;
  }
}
