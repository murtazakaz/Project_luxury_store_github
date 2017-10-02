import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the StoreItemdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-store-itemdetails',
  templateUrl: 'store-itemdetails.html',
})
export class StoreItemdetailsPage {
public item_id:any;
public itemdetail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.item_id = this.navParams.get('id');
    this.http.get('http://govirtualstore.com/app/iOS/details.php?name='+this.item_id).map(res => res.json()).subscribe(data => {
     
    this.itemdetail = data;
    console.log(this.itemdetail);
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreItemdetailsPage');
  }

}
