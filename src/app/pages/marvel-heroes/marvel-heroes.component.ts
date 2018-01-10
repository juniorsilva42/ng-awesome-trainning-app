import { Component, OnInit } from '@angular/core';

import { MarvelHeroesService } from '../../services/marvel-heroes/marvel-heroes.service';

@Component({
  selector: 'marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent implements OnInit {

  public obj: any;
  public heroes: any;

  constructor(public marvelHeroService: MarvelHeroesService) { 

      this.getAllMarvelHeroes();
  }

  getAllMarvelHeroes(){

    this.marvelHeroService.getHeroes()
        .then(data => {
            this.obj = data;
            this.heroes = this.obj.data.results;
        });
  }

  ngOnInit() {
  }

}
