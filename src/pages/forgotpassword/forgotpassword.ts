import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from "../login/login";

@Component({
  selector: 'forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotPassword {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(Login)
  }
}
