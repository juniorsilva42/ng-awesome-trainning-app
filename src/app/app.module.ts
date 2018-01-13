import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarvelHeroesComponent } from './pages/marvel-heroes/marvel-heroes.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';

import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './modules/cursos/cursos.module';

import { HeroesService } from './services/heroes/heroes.service';
import { MarvelHeroesService } from './services/marvel-heroes/marvel-heroes.service';
import { SeoService } from './services/seo/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    MarvelHeroesComponent,
    HomeComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ MarvelHeroesService, SeoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
