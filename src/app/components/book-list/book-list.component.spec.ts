import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { BookListComponent } from './book-list.component';
import { BookService } from '../../services/book.service';
import { BookStatus } from '../../types/book-status';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListComponent],
      providers: [provideHttpClient(), BookService],
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle book status', () => {
    const book = {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      status: BookStatus.AVAILABLE,
    };
    component.toogleStatus(book);
    expect(book.status).toEqual(BookStatus.RENTED);
    component.toogleStatus(book);
    expect(book.status).toEqual(BookStatus.AVAILABLE);
  });
});
