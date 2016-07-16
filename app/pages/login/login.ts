import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import {SignupPage} from '../signup/signup';
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


  constructor(private nav: NavController, private http: Http) {

    this.formData = { 
      email: 'root@root.com', 
      password: 'rootroot'
    }

  }


  login() {

    firebase.auth().signInWithEmailAndPassword(this.formData.email, this.formData.password)
    .then( (data) => {
      console.log(data);
      console.log('success');
    })
    .catch( (err) => {
      console.log(err);
    });

  }

  goToSignup() {
    this.nav.setRoot(SignupPage);
  }

}
