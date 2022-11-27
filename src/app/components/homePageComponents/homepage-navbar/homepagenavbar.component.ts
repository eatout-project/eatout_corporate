import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage-navbar',
  templateUrl: './homepagenavbar.component.html',
  styleUrls: ['./homepagenavbar.component.scss']
})
export class HomepagenavbarComponent implements OnInit {

  @Input() selectedMenu: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
