import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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

@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    Login,
    SignUp,
    ForgotPassword,
    HomeScreen,
    OrdercarPage,
    ReservecarPage,
    OrderdetailsPage,
    ThankyouPage,
    OrderhistoryPage,
    OrderhistorydetailsPage,
    WalletPage,
    AboutusPage,
    ContactusPage,
    CategoriesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    SignUp,
    ForgotPassword,
    HomeScreen,
    OrdercarPage,
    ReservecarPage,
    OrderdetailsPage,
    ThankyouPage,
    OrderhistoryPage,
    OrderhistorydetailsPage,
    WalletPage,
    AboutusPage,
    ContactusPage,
    CategoriesPage
  ],
  providers: [
    StatusBar,  
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
