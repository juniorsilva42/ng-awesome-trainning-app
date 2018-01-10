import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { MarvelHeroesComponent } from './pages/marvel-heroes/marvel-heroes.component';

// MODULES
import { CursosModule } from './modules/cursos/cursos.module';

// SERVICES
import { HeroesService } from './services/heroes/heroes.service';
import { MarvelHeroesService } from './services/marvel-heroes/marvel-heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MarvelHeroesComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    HttpModule
  ],
  providers: [ HeroesService, MarvelHeroesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
