import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomeScreen } from "../homescreen/homescreen";

/**
 * Generated class for the ThankyouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  homeScreen(){
    this.navCtrl.push(HomeScreen)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

}
