import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurants.service';

describe('RestaurantsService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
