import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginpage-body',
  templateUrl: './loginpage-body.component.html',
  styleUrls: ['./loginpage-body.component.scss']
})
export class LoginpageBodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFrontpage(): void {
    this.router.navigate([""]);
  }
}
