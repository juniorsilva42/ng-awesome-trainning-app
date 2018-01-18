import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarvelHeroesComponent } from './pages/marvel-heroes/marvel-heroes.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';

import { AppRoutingModule } from './app-routing.module';
import { CalcModule } from './modules/calc/calc.module';
import { BusyModule } from 'angular2-busy';

import { MarvelHeroesService } from './services/marvel-heroes/marvel-heroes.service';
import { SeoService } from './services/seo/seo.service';
import { LoadingComponent } from './shared/ui/loading-component/loading-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelHeroesComponent,
    HomeComponent,
    CursosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CalcModule,
    BusyModule
  ],
  providers: [ MarvelHeroesService, SeoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
