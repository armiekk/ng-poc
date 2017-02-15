import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryPageComponent } from './library-page.component';
import { BookSearchComponent } from './component/book-search/book-search.component';
import { BookAddComponent } from './component/book-add/book-add.component';

const routes: Routes = [
    { 
        path: '',  
        component: LibraryPageComponent,
        children: [
            { path: '', redirectTo: 'book/search', pathMatch: 'full' },
            { path: 'book', redirectTo: 'book/search', pathMatch: 'full' },
            { path: 'book/search', component: BookSearchComponent },
            { path: 'book/add', component: BookAddComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
