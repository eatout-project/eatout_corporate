import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export enum SelectedMenu {
  RESERVATIONS='reservations',
  MENUEDITOR='menuEditor'
}

@Component({
  selector: 'app-homepage-side-navbar',
  templateUrl: './homepage-side-navbar.component.html',
  styleUrls: ['./homepage-side-navbar.component.scss']
})
export class HomepageSideNavbarComponent implements OnInit {

  constructor() { }

  selectedMenu = SelectedMenu;

  @Output()
  selected = new EventEmitter<SelectedMenu>();

  ngOnInit(): void {
  }

  onClick(selectedMenu: SelectedMenu): void {
    this.selected.emit(selectedMenu);
  }
}
