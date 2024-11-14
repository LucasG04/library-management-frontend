import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookStatus } from '../../types/book-status';
import { Book } from '../../types/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  bookService = inject(BookService);

  books: Book[] = [];
  bookStatus = BookStatus;

  ngOnInit() {
    this.bookService
      .getAll()
      .pipe(take(1))
      .subscribe((books) => (this.books = books));
  }

  toogleStatus(book: Book) {
    book.status =
      book.status === BookStatus.AVAILABLE
        ? BookStatus.RENTED
        : BookStatus.AVAILABLE;
  }
}
