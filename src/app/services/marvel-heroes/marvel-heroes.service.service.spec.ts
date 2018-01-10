import { TestBed, inject } from '@angular/core/testing';

import { MarvelHeroesService } from './marvel-heroes.service';

describe('MarvelHeroes.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelHeroesService]
    });
  });

  it('should be created', inject([MarvelHeroesService], (service: MarvelHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
