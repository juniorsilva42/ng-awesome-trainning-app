import { Component, OnInit } from '@angular/core';

import { MarvelHeroesService } from '../../services/marvel-heroes/marvel-heroes.service';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'app-heroes-screen',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.sass']
})
export class MarvelHeroesComponent implements OnInit {

  public obj: any;
  public heroes: any;

  showSpinner: boolean = true;

  constructor(public marvelHeroService: MarvelHeroesService, private seo: SeoService) {

    this.getAllMarvelHeroes();
  }

  async getAllMarvelHeroes() {
    try {
      const data = await this.marvelHeroService.getHeroes();
      this.obj = data;
      this.heroes = this.obj.data.results;
      this.showSpinner = false;
    }catch (e) {
      console.log(`[ERR: ${e}]`);
    }

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
