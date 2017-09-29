import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUp } from "../signup/signup";
import { ForgotPassword } from "../forgotpassword/forgotpassword";
import { HomeScreen } from "../homescreen/homescreen";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {

  }
  signup(){
      this.navCtrl.push(SignUp)
  }
  forgotpwd(){
    this.navCtrl.push(ForgotPassword)
    
  }
  signin(){
    this.navCtrl.push(HomeScreen)
    
  }
}
