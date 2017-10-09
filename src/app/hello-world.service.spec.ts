import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HelloWorldService } from './hello-world.service';

describe('HelloWorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [HelloWorldService]
    });
  });

  it('should be created', inject([HelloWorldService], (service: HelloWorldService) => {
    expect(service).toBeTruthy();
  }));
});
