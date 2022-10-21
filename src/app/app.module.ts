import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { FrontpageNavbarComponent } from './components/frontpageComponents/frontpage-navbar/frontpage-navbar.component';
import { FrontpageBodyComponent } from './components/frontpageComponents/frontpage-body/frontpage-body.component';
import { GetStartedButtonComponent } from './components/frontpageComponents/get-started-button/get-started-button.component';
import { AdminLoginButtonComponent } from './components/frontpageComponents/admin-login-button/admin-login-button.component';
import { FrontpageFooterComponent } from './components/frontpageComponents/frontpage-footer/frontpage-footer.component';
import { LoginpageComponent } from './pages/loginPage/loginpage.component';
import { LoginpageBodyComponent } from './components/loginpageComponents/loginpage-body/loginpage-body.component';
import {LoginButtonComponent} from "./components/loginpageComponents/login-button/login-button.component";
import {RouterModule} from "@angular/router";
import { CreateAccountInvertedButtonComponent } from './components/loginpageComponents/create-account-inverted-button/create-account-inverted-button.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { CreateAccountPageBodyComponent } from './components/createAccountComponents/create-account-page-body/create-account-page-body.component';
import { CreateAccountFilledButtonComponent } from './components/createAccountComponents/create-account-filled-button/create-account-filled-button.component';
import { LoginInvertedButtonComponent } from './components/createAccountComponents/login-inverted-button/login-inverted-button.component';

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
    CreateAccountInvertedButtonComponent,
    CreateAccountPageComponent,
    CreateAccountPageBodyComponent,
    CreateAccountFilledButtonComponent,
    LoginInvertedButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: FrontpageComponent
      },
      {
        path: "login",
        component: LoginpageComponent
      },
      {
        path: "create-account",
        component: CreateAccountPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
