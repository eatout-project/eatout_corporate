import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account-page-body',
  templateUrl: './create-account-page-body.component.html',
  styleUrls: ['./create-account-page-body.component.scss']
})
export class CreateAccountPageBodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFrontpage(): void {
    this.router.navigate([""]);
  }
}
