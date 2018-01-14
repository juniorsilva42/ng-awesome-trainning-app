import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta, private title: Title) {
  }

  _generateTags(config){

    config = {
      title: '',
      description: '',
      slug: '',
      keywords: ['faculdade r sá, universidade rsa, ursa, cursos de graduação no piauí, cursos de graduação em picos, picos ensino superior, graduação no piauí, graduação em picos'],
      site_name: 'Faculdade RSá - Com você somos 10!',
      url: 'http://faculdadersa.edu.br/',
      image: 'url/to/image/image-default.png',
      type: 'website',
      locale: 'pt_BR',
      ...config
    };

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ property: 'og:type', content: config.type});
    this.meta.updateTag({ property: 'og:site_name', content: config.site_name});
    this.meta.updateTag({ property: 'og:title', content: config.title});
    this.meta.updateTag({ property: 'og:description', content: config.description});
    this.meta.updateTag({ property: 'og:image', content: config.image});
    this.meta.updateTag({ property: 'og:url', content: `${config.url}${config.slug}`});
    this.meta.updateTag({ property: 'og:locale', content: config.locale});
    this.meta.updateTag({ name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({ name: 'twitter:site', content: '@faculdadersa'});
    this.meta.updateTag({ name: 'twitter:title', content: config.title});
    this.meta.updateTag({ name: 'twitter:description', content: config.description});
    this.meta.updateTag({ name: 'twitter:image', content: config.image});
    this.meta.updateTag({ itemprop: 'name', content: config.title});
    this.meta.updateTag({ itemprop: 'description', content: config.description});
    this.meta.updateTag({ itemprop: 'image', content: config.image});
    this.meta.updateTag({ name: 'robots', content: 'index, follow'});
    this.meta.updateTag({ name: 'googlebot', content: 'index, follow'});

  }

}
