import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderdetailsPage } from "../orderdetails/orderdetails";
import { OrderhistorydetailsPage } from "../orderhistorydetails/orderhistorydetails";

/**
 * Generated class for the OrderhistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-orderhistory',
  templateUrl: 'orderhistory.html',
})
export class OrderhistoryPage {
  orders: string = "all";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  orderdtails(){
    this.navCtrl.push(OrderhistorydetailsPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderhistoryPage');
  }

  allOrders(order){
    this.orders=order;
  }

}
