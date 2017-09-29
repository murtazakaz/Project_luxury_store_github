import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GoogleMap, GoogleMapsEvent, GoogleMaps, GoogleMapOptions } from '@ionic-native/google-maps';

@Component({
  selector: 'page-trackdriver',
  templateUrl: 'trackdriver.html',
})
export class TrackdriverPage {

  map: GoogleMap;
  mapElement: HTMLElement;

  DriverID: any;
  DriverData: any;
  currDriverLat: any;
  currDriverLong: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private googleMaps: GoogleMaps) {

    this.DriverID = this.navParams.get('DriverID');

    console.log("DriverID Track Screen: " + this.DriverID);

   // let apiUrl = 'http://voltasinc.net//voltas/iOS/iOSGetDriverCurrentLocation.php?driverID=' + this.DriverID;

   // console.log(apiUrl);

   // this.http.get(apiUrl).map(res => res.json()).subscribe(data => { 

    // console.log(data);
    
    // this.DriverData = data.data;

    // console.log(this.DriverData);

    // this.currDriverLat = this.DriverData.driverCurrentLat;
    // this.currDriverLong = this.DriverData.driverCurrentLong;
    // });

  }

  ngAfterViewInit() {
   }

   ionViewDidEnter(){
    this.loadMap();
    }

   loadMap() {
    this.mapElement = document.getElementById('map2');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.currDriverLat,
          lng: this.currDriverLong
        },
        zoom: 16,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Driver Position',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.currDriverLat,
              lng: this.currDriverLong
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('Current Driver Position');
              });
          });

      });
  }
   }
