import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, ViewController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoriesPage } from '../pages/categories/categories';
import { StoreCategoriesPage } from '../pages/store-categories/store-categories';
import { StoreItemlistPage } from '../pages/store-itemlist/store-itemlist';
import { StoreItemdetailsPage } from '../pages/store-itemdetails/store-itemdetails';
import { MapPage } from '../pages/map/map';
import {AutocompletePage} from '../pages/autocomplete/autocomplete';
import { StoreDirectionmapPage } from '../pages/Store-directionmap/Store-directionmap';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StoreCategoriesPage  ;
 
 
  
//contactus=ContactusPage;
  @ViewChild('nav') nav: NavController;
  @ViewChild('View') viewCtrl: ViewController;
  constructor(private modalCtrl:ModalController, private menuCtrl:MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
 
  pageload(page:any){
    this.nav.push(page);
    this.menuCtrl.close();
  }
  OnLoad(page: any)
  {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

