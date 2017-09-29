import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThankyouPage } from "../thankyou/thankyou";

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
  }
  public event = {
    month:new Date().toISOString(),
    timeStarts: new Date().toTimeString().split(" ")[0]

 }
 ordercar(){
   this.navCtrl.push(ThankyouPage)
 }
}
