import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: Date;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  reviews: Review[] = [
    { name: 'János', rating: 5, comment: 'Nagyon szép szoba, kényelmes ágy!', date: new Date('2025-06-15') },
    { name: 'Anna', rating: 4, comment: 'Finom reggeli, barátságos személyzet.', date: new Date('2025-06-20') }
  ];

  newReview: Review = { name: '', rating: 5, comment: '', date: new Date() };

  addReview() {
    if (!this.newReview.name || !this.newReview.comment) {
      alert('Kérlek töltsd ki a nevet és a véleményt!');
      return;
    }
    this.newReview.date = new Date();
    this.reviews.unshift({...this.newReview});
    this.newReview = { name: '', rating: 5, comment: '', date: new Date() };
  }

  getStars(rating: number) {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}
