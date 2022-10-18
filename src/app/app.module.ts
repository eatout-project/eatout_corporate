import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { FrontpageNavbarComponent } from './components/frontpageComponents/frontpage-navbar/frontpage-navbar.component';
import { FrontpageBodyComponent } from './components/frontpageComponents/frontpage-body/frontpage-body.component';
import { GetStartedButtonComponent } from './components/frontpageComponents/get-started-button/get-started-button.component';
import { AdminLoginButtonComponent } from './components/frontpageComponents/admin-login-button/admin-login-button.component';
import { FrontpageFooterComponent } from './components/frontpageComponents/frontpage-footer/frontpage-footer.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { LoginpageBodyComponent } from './components/loginpageComponents/loginpage-body/loginpage-body.component';
import {LoginButtonComponent} from "./components/loginpageComponents/login-button/login-button.component";
import {RouterModule} from "@angular/router";
import { CreateAccountButtonComponent } from './components/loginpageComponents/create-account-button/create-account-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    FrontpageNavbarComponent,
    FrontpageBodyComponent,
    GetStartedButtonComponent,
    AdminLoginButtonComponent,
    FrontpageFooterComponent,
    LoginpageComponent,
    LoginpageBodyComponent,
    LoginButtonComponent,
    CreateAccountButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: FrontpageComponent
      },
      {
        path: "loginpage",
        component: LoginpageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
