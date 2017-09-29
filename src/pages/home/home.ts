import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from "../login/login";
import { SignUp } from "../signup/signup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(Login)
  }
  signup(){
    this.navCtrl.push(SignUp)
}

}
