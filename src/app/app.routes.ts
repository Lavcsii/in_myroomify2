import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BookingComponent } from './components/booking/booking.component';
import { ReviewComponent } from './components/review/review.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'review', component: ReviewComponent },
  { path: '**', redirectTo: '' }
];
