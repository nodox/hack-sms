import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  formData: { email: string, password: string};


  constructor(private nav: NavController) {
    this.formData = {
      email: '',
      password: ''
    };

  }


  login() {
    console.log(this.formData);
  }

}
