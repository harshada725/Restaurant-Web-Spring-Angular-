import { TestBed } from '@angular/core/testing';

import { RestaurantCurdService } from './restaurant-curd.service';

describe('RestaurantCurdService', () => {
  let service: RestaurantCurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantCurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
