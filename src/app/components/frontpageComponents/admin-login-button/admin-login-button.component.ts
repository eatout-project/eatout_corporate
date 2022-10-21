import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login-button',
  templateUrl: './admin-login-button.component.html',
  styleUrls: ['./admin-login-button.component.scss']
})
export class AdminLoginButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.router.navigate(["/login"]);
  }

}
