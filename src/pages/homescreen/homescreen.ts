import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Login } from "../login/login";
import { SignUp } from "../signup/signup";
import { OrdercarPage } from "../ordercar/ordercar";
import { ReservecarPage } from "../reservecar/reservecar";

@Component({
  selector: 'homescreen',
  templateUrl: 'homescreen.html'
})
export class HomeScreen {

  constructor(private menuCtrl:MenuController, public navCtrl: NavController) {

  }
  OnOpenMenu()
  {
    this.menuCtrl.open();
  } 
  ordercar(){
      this.navCtrl.push(OrdercarPage)
  }
  ReservecarPage(){
      this.navCtrl.push(ReservecarPage)
  }
  
}
