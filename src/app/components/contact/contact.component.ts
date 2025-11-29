import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };

  sendMessage() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log("Üzenet elküldve:", this.contact);
      alert('Köszönjük az üzenetet, hamarosan válaszolunk!');
      this.contact = { name: '', email: '', message: '' }; // mezők ürítése
    } else {
      alert('Kérlek töltsd ki az összes mezőt!');
    }
  }
}
