import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { WeddingComponent } from 'src/app/wedding/wedding.component';
import { TravelguideComponent } from 'src/app/travelguide/travelguide.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  { path: 'home', component : HomeComponent },
  { path: 'aboutus', component : AboutusComponent },
  { path: 'wedding', component : WeddingComponent },
  { path: 'travelguide', component : TravelguideComponent }
];