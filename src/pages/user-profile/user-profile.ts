import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  UserName: any;
  UserEmail: any;
  UserContact: any;
  UserProfileImage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    
    this.nativeStorage.getItem('UserDetails')
    .then(
      data => this.getUserData(data),
      error => console.error(error)
    );

  }

 getUserData(userData: any)
 {
  this.UserName = userData.userName;
  this.UserEmail = userData.userEmail;
  this.UserContact = userData.userMobile;
  this.UserProfileImage = userData.userImage;
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
