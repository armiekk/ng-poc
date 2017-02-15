import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../shared/service/state/state.service';
import {
  BookControllerService,
  Book,
  BookAdd,
  BookInfo
} from '../../service/book-controller.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {

  private bookData: BookInfo[];

  constructor(
    private state: StateService,
    private bookController: BookControllerService
  ) { }

  ngOnInit() {
    this.bookData = [];
    this.bookController.getBookList().subscribe((bookList: BookInfo[]) =>  this.bookData = bookList);
    this.state.goToSearch();

  }

}
