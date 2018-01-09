import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  constructor() {
  }

  getHeroes(){
      return ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Deadpool', 'Homem-aranha'];
  }

}
