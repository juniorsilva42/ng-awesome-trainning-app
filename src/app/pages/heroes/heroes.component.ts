import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes/heroes.service';

@Component({
    selector: 'heroes-screen',
    templateUrl: './heroes.component.html'
})

export class HeroesComponent {

  title: string;
  heroes: string[];
  myFavoriteHero: string;

  constructor (private heroesService: HeroesService){

      this.title = 'Tour of Heroes';
      this.heroes = this.heroesService.getHeroes();
      this.myFavoriteHero = this.heroesService.getHeroes()[4];
  }

}
