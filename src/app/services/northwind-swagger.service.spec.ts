import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindSwaggerService } from './northwind-swagger.service';

describe('NorthwindSwaggerService', () => {
  let service: NorthwindSwaggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(NorthwindSwaggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
