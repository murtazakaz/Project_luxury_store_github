import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../login/login';
import { StoreCategoriesPage } from '../store-categories/store-categories';

/**
 * Generated class for the CategoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    this.navCtrl.push(Login)
  }
  store(){
    this.navCtrl.push(StoreCategoriesPage);
  }
  splash = true;
  ionViewDidLoad() { 
    //  this.tabBarElement.style.display = 'none';  (If not using Tab menu)
    setTimeout(() => {
      this.splash = false;
      //    this.tabBarElement.style.display = 'flex';  (If not using Tab menu)
    }, 4000);
  }
}
