import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MarvelHeroesComponent } from './pages/marvel-heroes/marvel-heroes.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CalcComponent } from "./modules/calc/calc.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'heroes', component: MarvelHeroesComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'calc', component: CalcComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
