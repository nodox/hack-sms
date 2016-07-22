import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import {ChatlobbyPage} from '../chatlobby/chatlobby';

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
      email: '', 
      password: ''
    }

  }

  signup() {
  	firebase.auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password)
    .then( (data) => {
      console.log(data);


      
      var user = {};
      user['id'] = data.uid;
      user['email'] = data.email;

      var dbRef = firebase.database().ref('users/');
      dbRef.push({
        id: data.uid,
        email: data.email
      });

      this.nav.setRoot(ChatlobbyPage);

    })
    .catch( (err) => {
      console.log(err);
    });
  }

  goToLogin() {
    this.nav.setRoot(LoginPage);
  }


}
