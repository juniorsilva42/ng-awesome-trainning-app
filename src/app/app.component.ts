import { Component } from '@angular/core';
import Constants from '../assets/static/js/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    this._getInfoApp();
  }

  _getInfoApp(){
      console.log(`ThreeSoft [APP]:\nName: ${Constants.APP_NAME}\nVersion: ${Constants.VERSION}`);
  }

}
