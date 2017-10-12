import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';


import { CategoriesPage } from '../pages/categories/categories';
import { StoreCategoriesPage } from '../pages/store-categories/store-categories';
import { StoreItemlistPage } from '../pages/store-itemlist/store-itemlist';
import { StoreItemdetailsPage } from '../pages/store-itemdetails/store-itemdetails';
import { StoreDirectionmapPage } from '../pages/Store-directionmap/Store-directionmap';
import { MapPage } from '../pages/map/map';
import {AutocompletePage} from '../pages/autocomplete/autocomplete';

@NgModule({ 
  declarations: [
    MyApp,
    CategoriesPage,
    StoreCategoriesPage,
    StoreItemlistPage,
    StoreItemdetailsPage,
    MapPage,
    AutocompletePage,
    StoreDirectionmapPage
  
  ],
  imports: [
    BrowserModule,
    HttpModule , 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriesPage,
    StoreCategoriesPage,
    StoreItemlistPage,
    StoreItemdetailsPage,
    MapPage,
    AutocompletePage,
    StoreDirectionmapPage
    
  ],
  providers: [
    StatusBar,  
    SplashScreen,
    GoogleMaps,
    HttpModule, 
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
