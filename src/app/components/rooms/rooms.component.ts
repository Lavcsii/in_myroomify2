import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Room {
  id: number;
  name: string;
  type: string;
  room_number: number;
  description: string;
  price_per_night: number;
  capacity: number;
  status: string;
}

interface Booking {
  room_id: number;
  name: string;
  email: string;
  start_date: string;
  end_date: string;
}

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[] = [];
  selectedRoom: Room | null = null;

  booking: Booking = {
    room_id: 0,
    name: '',
    email: '',
    start_date: '',
    end_date: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.http.get<Room[]>('/api/rooms').subscribe({
      next: (data) => this.rooms = data,
      error: (err) => console.error('Hiba a szobák betöltésekor:', err)
    });
  }

  selectRoom(room: Room) {
    this.selectedRoom = room;
    this.booking.room_id = room.id;
  }

  getStatusColor(status: string) {
    switch(status) {
      case 'available': return 'green';
      case 'booked': return 'red';
      case 'maintenance': return 'orange';
      case 'inactive': return 'gray';
      default: return 'blue';
    }
  }

  submitBooking() {
    this.http.post('/api/bookings', this.booking).subscribe({
      next: () => {
        alert('Foglalás sikeres!');
        this.selectedRoom = null;
      },
      error: (err) => alert('Hiba a foglalásnál: ' + err.message)
    });
  }
}
