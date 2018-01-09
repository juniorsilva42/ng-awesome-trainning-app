import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

// MODULES
import { CursosModule } from './modules/cursos/cursos.module';

// SERVICES
import { HeroesService } from './services/heroes/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [ HeroesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
