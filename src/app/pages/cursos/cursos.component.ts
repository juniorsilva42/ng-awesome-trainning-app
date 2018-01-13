import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'tsapp-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo._generateTags({
      title: 'Cursos de Graduação - Picos | Faculdade RSá',
      description: 'Conheça nossos Cursos de Graduação. Estude na faculdade RSá em Picos e conheça um novo mundo de oportunidades e experiências internacionais.',
      image: '@path/to/image/my-image.jpg',
      slug: 'cursos',
      type: 'article',
      keywords: ['cursos em picos', 'faculdade rsá', 'ciência da computação', 'graduação']
    });
  }

}
