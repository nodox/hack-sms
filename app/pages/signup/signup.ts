import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import {LoginPage} from '../login/login';




/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {
  formData: { email: string, password: string};


  constructor(private nav: NavController) {
  	this.formData = { 
      email: 'root@root.com', 
      password: 'rootroot'
    }

  }

  signup() {
  	firebase.auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password)
    .then( (data) => {
      console.log(data);
      console.log('success');
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  goToLogin() {
    this.nav.setRoot(LoginPage);
  }


}
