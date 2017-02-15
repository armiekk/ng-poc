import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookSearchComponent } from './component/book-search/book-search.component';
import { LibraryPageComponent } from './library-page.component';
import { AppRoutingModule } from './library-page-routing.module';
import { AppSharedModule } from '../shared/app-shared.module';
import { SearchDataTableComponent } from './component/book-search/search-data-table/search-data-table.component';
import { SearchConditionComponent } from './component/book-search/search-condition/search-condition.component';
import { BookAddComponent } from './component/book-add/book-add.component';
import { BookApi } from './api/BookApi';
import { BookControllerService } from './service/book-controller.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AppSharedModule,
    FormsModule
  ],
  declarations: [
    LibraryPageComponent,
    BookSearchComponent,
    SearchDataTableComponent,
    SearchConditionComponent,
    BookAddComponent,
  ],
  providers: [BookApi, BookControllerService]
})
export class LibraryPageModule { }
