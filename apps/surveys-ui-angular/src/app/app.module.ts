import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import "@abgov/web-components";
import { AngularComponentsModule } from "@abgov/angular-components";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DrrComponent } from './drr/drr.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ChargeAccountComponent } from './charge-account/charge-account.component';
import { ChargeAccountModule } from './modules/charge_account/charge-account.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { LoginAccountComponent } from './components/login-account/login-account.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

const appRoutes: Routes = [
  { path: 'drr', component: DrrComponent },
  { path: 'charge_account', component: ChargeAccountModule },
];

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'master',
        clientId: 'angular-client',
      },
      initOptions: {
        onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
        flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    DrrComponent,
    CardComponent,
    ChargeAccountComponent,
    PageHeaderComponent,
    LoginAccountComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ChargeAccountModule,
    AngularComponentsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
