import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BookInfo } from '../../../model/book-info';
import { BookControllerService } from '../../../service/book-controller.service';
@Component({
  selector: 'app-search-data-table',
  templateUrl: './search-data-table.component.html',
  styleUrls: ['./search-data-table.component.css'],
})
export class SearchDataTableComponent implements OnInit, OnChanges {

  @Input() data: BookInfo[];

  constructor(
    private bookController: BookControllerService,
    private router: Router
    ) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges){
    this.data = changes['data'] ? changes['data'].currentValue : [];
  }

  selectRow(event){
    this.bookController.updateBookModel(event.data);
    this.router.navigateByUrl('library/book/add');
  }

}
