import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StoreItemlistPage } from '../store-itemlist/store-itemlist';
/**
 * Generated class for the StoreCategoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-store-categories',
  templateUrl: 'store-categories.html',
})
export class StoreCategoriesPage {
  category : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreCategoriesPage');
  }
  itemlist(cat){
   this.category=cat;

    this.navCtrl.push(StoreItemlistPage,{cat: this.category});}
}
