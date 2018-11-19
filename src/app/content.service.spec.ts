import { TestBed, inject } from '@angular/core/testing';

import { ContentService } from './content.service';

describe('TwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentService]
    });
  });

  it('should be created', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));
});
