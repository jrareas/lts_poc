import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

const appRoutes: Routes = [
  { path: 'drr', component: DrrComponent },
  { path: 'charge_account', component: ChargeAccountModule },
];

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
    ChargeAccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
