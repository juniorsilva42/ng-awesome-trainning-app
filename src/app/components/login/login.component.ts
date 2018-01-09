import { Component } from '@angular/core';

@Component({
    selector: 'login-screen',
    templateUrl: './login.component.html'
})

export class LoginComponent {

  title: string;
  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Deadpool'];
  myFavoriteHero: string;

  constructor (){

      this.title = 'Tour of Heroes';
      this.myFavoriteHero = this.heroes[4];
  }


}
