import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WeddingComponent } from './wedding/wedding.component';
import { TravelguideComponent } from './travelguide/travelguide.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { FooterComponent } from './footer/footer.component';

import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    WeddingComponent,
    TravelguideComponent,
    RsvpFormComponent,
    FooterComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
