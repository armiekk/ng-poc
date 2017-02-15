import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../shared/service/state/state.service';
import {
  BookControllerService,
  Book,
  BookAdd,
  BookInfo
} from '../../service/book-controller.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
})
export class BookAddComponent implements OnInit {

  private bookAddModel: BookAdd;

  constructor(
    private state: StateService,
    private bookController: BookControllerService
  ) { }

  ngOnInit() {
    this.bookAddModel = {};
    this.bookController.bookModel.subscribe((book: Book) =>
      this.bookAddModel = Object.assign({}, this.bookAddModel, book)
    );
    this.state.goToAdd();
  }

  add(bookAdd: BookAdd) {
    this.bookController
      .addBook(bookAdd)
      .subscribe(this.commonResponse);
  }

  edit(bookEdit: Book) {
    this.bookController
      .editBook(bookEdit)
      .subscribe(this.commonResponse);
  }

  commonResponse(book: Book) {
    return book.id ? alert('บันทึกข้อมูลสำเร็จ') : alert('ไม่สามารถบันทึกข้อมูลได้');
  }

}
