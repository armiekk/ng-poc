/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookControllerService } from './book-controller.service';

describe('BookControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookControllerService]
    });
  });

  it('should ...', inject([BookControllerService], (service: BookControllerService) => {
    expect(service).toBeTruthy();
  }));
});
