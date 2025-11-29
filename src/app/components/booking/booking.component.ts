import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RoomOption {
  name: string;
  price: number;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  rooms: RoomOption[] = [
    { name: 'Standard szoba', price: 19000 },
    { name: 'Deluxe szoba', price: 29000 },
    { name: 'Lakosztály', price: 49000 }
  ];

  booking = {
    checkin: '',
    checkout: '',
    guests: 1,
    roomType: this.rooms[0].name
  };

  get nights(): number {
    const from = new Date(this.booking.checkin);
    const to = new Date(this.booking.checkout);
    const diff = (to.getTime() - from.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 0;
  }

  get totalPrice(): number {
    const room = this.rooms.find(r => r.name === this.booking.roomType);
    return room ? room.price * this.nights : 0;
  }

  submitBooking() {
    if (!this.booking.checkin || !this.booking.checkout || this.nights === 0) {
      alert('Kérlek válassz érvényes dátumot!');
      return;
    }
    alert(`Foglalás elküldve!\nSzoba: ${this.booking.roomType}\nVendégek: ${this.booking.guests}\nÉjszakák száma: ${this.nights}\nÖsszeg: ${this.totalPrice} Ft`);
    // Itt később lehetne API hívás a backend felé
  }
}
