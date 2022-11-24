import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LandingpageComponent} from './pages/landingpage/landingpage.component';
import {FrontpageNavbarComponent} from './components/frontpageComponents/frontpage-navbar/frontpage-navbar.component';
import {FrontpageBodyComponent} from './components/frontpageComponents/frontpage-body/frontpage-body.component';
import {
  GetStartedButtonComponent
} from './components/frontpageComponents/get-started-button/get-started-button.component';
import {
  AdminLoginButtonComponent
} from './components/frontpageComponents/admin-login-button/admin-login-button.component';
import {FooterComponent} from './components/ui-components/frontpage-footer/footer.component';
import {LoginpageComponent} from './pages/loginPage/loginpage.component';
import {LoginpageBodyComponent} from './components/loginpageComponents/loginpage-body/loginpage-body.component';
import {LoginButtonComponent} from "./components/loginpageComponents/login-button/login-button.component";
import {RouterModule} from "@angular/router";
import {
  CreateAccountInvertedButtonComponent
} from './components/loginpageComponents/create-account-inverted-button/create-account-inverted-button.component';
import {CreateAccountPageComponent} from './pages/create-account-page/create-account-page.component';
import {
  CreateAccountPageBodyComponent
} from './components/createAccountPageComponents/create-account-page-body/create-account-page-body.component';
import {
  CreateAccountFilledButtonComponent
} from './components/createAccountPageComponents/create-account-filled-button/create-account-filled-button.component';
import {
  LoginInvertedButtonComponent
} from './components/createAccountPageComponents/login-inverted-button/login-inverted-button.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {HomepagenavbarComponent} from './components/homePageComponents/homepage-navbar/homepagenavbar.component';
import {
  HomepageSideNavbarComponent
} from './components/homePageComponents/homepage-side-navbar/homepage-side-navbar.component';
import {HomepageBodyComponent} from './components/homePageComponents/homepage-body/homepage-body.component';
import {
  NewReservationsListComponent
} from './components/homePageComponents/new-reservations-list/new-reservations-list.component';
import {
  AcceptReservationButtonComponent
} from './components/homePageComponents/new-reservations-list/accept-reservation-button/accept-reservation-button.component';
import {
  DeclineReservationButtonComponent
} from "./components/homePageComponents/new-reservations-list/decline-reservation-button/decline-reservation-button.component";
import {
  AcceptedReservationsListComponent
} from './components/homePageComponents/accepted-reservations-list/accepted-reservations-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CreateAccountFacade} from "./services/facades/create-account.facade";
import {HttpClientModule} from "@angular/common/http";
import {LoginFacade} from "./services/facades/login.facade";
import {MenuEditorComponent} from './components/homePageComponents/menu-editor/menu-editor.component';
import {MatSelectModule} from "@angular/material/select";
import {CategoryFacade} from "./services/facades/category.facade";
import {ItemFacade} from "./services/facades/item.facade";
//import { YourMenuComponent } from './components/homePageComponents/your-menu/your-menu.component';
//import { MenuItemComponent } from './components/homePageComponents/your-menu/menu-item/menu-item.component';
//import { MenuCategoryComponent } from './components/homePageComponents/your-menu/menu-category/menu-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    FrontpageNavbarComponent,
    FrontpageBodyComponent,
    GetStartedButtonComponent,
    AdminLoginButtonComponent,
    FooterComponent,
    LoginpageComponent,
    LoginpageBodyComponent,
    LoginButtonComponent,
    CreateAccountInvertedButtonComponent,
    CreateAccountPageComponent,
    CreateAccountPageBodyComponent,
    CreateAccountFilledButtonComponent,
    LoginInvertedButtonComponent,
    HomepageComponent,
    HomepagenavbarComponent,
    HomepageSideNavbarComponent,
    HomepageBodyComponent,
    NewReservationsListComponent,
    AcceptReservationButtonComponent,
    DeclineReservationButtonComponent,
    AcceptedReservationsListComponent,
    MenuEditorComponent,
    //YourMenuComponent,
    //MenuItemComponent,
    //MenuCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LandingpageComponent
      },
      {
        path: "login",
        component: LoginpageComponent
      },
      {
        path: "create-account",
        component: CreateAccountPageComponent
      },
      {
        path: "homepage",
        component: HomepageComponent
      }
    ]),
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [CreateAccountFacade, LoginFacade, CategoryFacade, ItemFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
