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
  googlemapurl: any;
  photopath: any;
  photo: any;
  p: any;
  photoarray: any;
  public placeaddress: any;
  public placename: any;
  public place_id: any;
  public item_id: any;
public itemdetail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.place_id = this.navParams.get('p_id');
    console.log(this.place_id)
    let apiUrl = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+this.place_id+"&key=AIzaSyD_HxOvY1-iyAZJzc9oVnrO10zrQGZxe3w"
    this.http.get(apiUrl).map(res => res.json()).subscribe(data => {
      console.log(apiUrl)
    //  console.log(data)
    this.placename = data.result.name;
    this.googlemapurl = data.result.url;
    this.placeaddress = data.result.formatted_address;
    this.photoarray = data.result.photos;
    for (this.p in this.photoarray) {
    // console.log(this.photoarray[this.p].photo_reference);
    this.photo = this.photoarray[this.p].photo_reference;
  }
   this.photopath ="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+this.photo+"&key=AIzaSyD_HxOvY1-iyAZJzc9oVnrO10zrQGZxe3w";
    console.log(this.photopath);
  //  this.itemdetail= JSON.stringify(data);
  //   console.log(this.itemdetail.results);
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreItemdetailsPage');
  }
  
}
