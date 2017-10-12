import { MapType } from '@angular/compiler/src/output/output_ast';
import { Component ,ViewChild ,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
 @ViewChild('map') mapElement: ElementRef;
 map :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initMap();
  }
  initMap(){
  let latlng = new google.maps.LatLng(-34.9290,138.6010);

  let mapOption ={
    center: latlng,
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);

  }
}
