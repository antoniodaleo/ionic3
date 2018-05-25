import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Antonio Daleo"; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*
    Creiamo la funzione
  */
  public sotraiDoisNumero(num1:number , num2:number): void{
    /*in java joption, qui alert*/
    alert(num1 + num2);
  } 

  public somaDoisNumero(): void{
     
  }

  /*
    A vida da pagina
  */
  ionViewDidLoad() {
     
  }

}
