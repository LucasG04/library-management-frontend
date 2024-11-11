import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookStatus } from '../../types/book-status';
import { Book } from '../../types/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [ CommonModule, MatButtonModule, MatCardModule, MatIconModule ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  bookStatus = BookStatus;
  books: Book[] = [
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', imageUrl: 'https://m.media-amazon.com/images/I/81QuEGw8VPL.jpg', status: BookStatus.AVAILABLE },
    { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', imageUrl: 'https://m.media-amazon.com/images/I/811NqsxadrS._AC_UF894,1000_QL80_.jpg', status: BookStatus.AVAILABLE },
    { id: '3', title: '1984', author: 'George Orwell', imageUrl: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF894,1000_QL80_.jpg', status: BookStatus.RENTED }
  ];

  toogleStatus(book: Book) {
    book.status = book.status === BookStatus.AVAILABLE ? BookStatus.RENTED : BookStatus.AVAILABLE;
  }
}
