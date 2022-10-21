import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account-inverted-button',
  templateUrl: './create-account-inverted-button.component.html',
  styleUrls: ['./create-account-inverted-button.component.scss']
})
export class CreateAccountInvertedButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreateAccount(): void {
    this.router.navigate(["/create-account"]);
  }
}
