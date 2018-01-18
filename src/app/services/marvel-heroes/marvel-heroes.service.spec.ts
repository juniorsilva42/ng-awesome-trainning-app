import { TestBed, inject } from '@angular/core/testing';

import { MarvelHeroesService } from './marvel-heroes.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

describe('MarvelHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelHeroesService, Http]
    });
  });

  it('should be created', inject([MarvelHeroesService], (service: MarvelHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
