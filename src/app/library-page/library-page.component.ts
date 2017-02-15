import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/service/state/state.service';

@Component({
    selector: 'library-page',
    templateUrl: './library-page.component.html',
})
export class LibraryPageComponent implements OnInit {
    
    private programMode: string;

    constructor(
        private state: StateService
    ){}

    ngOnInit(){
        this.state.programMode.subscribe((mode: string) => this.programMode = mode);
    }


}