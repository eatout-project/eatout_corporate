import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-inverted-button',
  templateUrl: './login-inverted-button.component.html',
  styleUrls: ['./login-inverted-button.component.scss']
})
export class LoginInvertedButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigate(["login"]);
  }
}
