import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, ViewController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { SignUp } from '../pages/signup/signup';
import { ForgotPassword } from '../pages/forgotpassword/forgotpassword';
import { HomeScreen } from '../pages/homescreen/homescreen';
import { OrdercarPage } from '../pages/ordercar/ordercar';
import { ReservecarPage } from '../pages/reservecar/reservecar';
import { OrderdetailsPage } from '../pages/orderdetails/orderdetails';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { OrderhistorydetailsPage } from '../pages/orderhistorydetails/orderhistorydetails';
import { WalletPage } from '../pages/wallet/wallet';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';
import { CategoriesPage } from '../pages/categories/categories';
import { StoreCategoriesPage } from '../pages/store-categories/store-categories';
import { StoreItemlistPage } from '../pages/store-itemlist/store-itemlist';
import { StoreItemdetailsPage } from '../pages/store-itemdetails/store-itemdetails';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CategoriesPage;
  homepage=HomeScreen;
  logout=HomePage;
  orderhistory=OrderhistoryPage;
  wallet=WalletPage;
  aboutus=AboutusPage;
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
 presentProfileModal() {
   let profileModal = this.modalCtrl.create(ContactusPage);
   profileModal.present();
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

