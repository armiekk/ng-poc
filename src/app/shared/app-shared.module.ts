import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibraryTemplateComponent } from './component/library-template/library-template.component';
import { 
  MenubarModule, BreadcrumbModule, PanelModule, InputTextModule, DataTableModule, SharedModule ,
  ButtonModule
} from 'primeng/primeng';
import { StateService } from './service/state/state.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MenubarModule,
    BreadcrumbModule
  ],
  declarations: [LibraryTemplateComponent],
  exports: [
    LibraryTemplateComponent, PanelModule, InputTextModule, DataTableModule, SharedModule, ButtonModule
    ],
  providers: [StateService]
})
export class AppSharedModule { }
