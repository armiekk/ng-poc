import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StateService {

  programMode: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  goToAdd() {
    this.programMode.next('เพิ่ม');
  }

  goToSearch() {
    this.programMode.next('ค้นหา');
  }

}
