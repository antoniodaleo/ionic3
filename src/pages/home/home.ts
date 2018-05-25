import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// TS é il nome della classe
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
