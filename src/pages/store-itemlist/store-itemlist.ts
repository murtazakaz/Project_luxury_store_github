import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import { StoreItemdetailsPage } from '../store-itemdetails/store-itemdetails';
/**
 * Generated class for the StoreItemlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-store-itemlist',
  templateUrl: 'store-itemlist.html',
})
export class StoreItemlistPage {
 public itemarray:any;
 public itemcategory:any;
 public itemid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
   
    this.itemcategory = this.navParams.get('cat');
   
  this.http.get('http://govirtualstore.com/app/iOS/fetchcategories.php?type='+this.itemcategory).map(res => res.json()).subscribe(data => {
    console.log(data);
  this.itemarray = data;
  // var i;
  // for(i in this.itemarray)
  // {
  //   this.name= this.itemarray[i].name;
  // }
  });
    
  }
  itemdetails(id)
  { this.itemid=id;
    this.navCtrl.push(StoreItemdetailsPage,{id: this.itemid});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreItemlistPage');
   
  }

}
