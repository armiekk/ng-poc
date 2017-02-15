import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'library', loadChildren: './library-page/library-page.module#LibraryPageModule' },
    { path: '**', redirectTo: 'library', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
