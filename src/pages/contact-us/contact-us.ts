import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, private emailComposer: EmailComposer) {

    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        console.log('Composer Available');
      }
     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  CallNumber() {
    this.callNumber.callNumber("+97145217500", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));  
  }
  sendEmail() {

    let email = {
      to: 'info@voltasinc.net',
      
      subject: 'Voltas User App Contact Email',
      body: '',
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);
  }
}
