import { Component, OnInit } from '@angular/core';

import { MarvelHeroesService } from '../../services/marvel-heroes/marvel-heroes.service';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent implements OnInit {

  public obj: any;
  public heroes: any;

  constructor(public marvelHeroService: MarvelHeroesService, private seo: SeoService) {

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
    this.seo._generateTags({
      title: 'Marvel Super Heroes',
      description: 'This is a page of Marvel Super Heroes',
      image: '@path/to/image/my-image.jpg',
      slug: 'heroes',
      keywords: ['marvel', 'marvel heroes', 'heroes marvel', 'DC >>>> Marvel']
    });
  }

}
