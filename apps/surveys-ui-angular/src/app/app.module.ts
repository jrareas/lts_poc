import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DrrComponent } from './drr/drr.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

const appRoutes: Routes = [
  { path: 'drr', component: DrrComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DrrComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
