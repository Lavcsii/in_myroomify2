import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DecimalPipe],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: any[] = [];
  selectedRoom: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.http.get<any[]>('/api/rooms').subscribe({
      next: data => this.rooms = data,
      error: err => console.error('Hiba a szobák betöltésekor:', err)
    });
  }

  selectRoom(room: any): void {
    this.selectedRoom = room;
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'available': return 'green';
      case 'booked': return 'red';
      case 'maintenance': return 'orange';
      default: return 'gray';
    }
  }
}
