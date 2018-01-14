import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'tsapp-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo._generateTags({
      title: 'Faculdade RSá - Página Inicial',
      description: 'A faculdade RSá...',
      image: '@path/to/image/my-image.jpg',
      slug: ''
    });
  }

}
