import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import {SignupPage} from '../signup/signup';
import {ChatlobbyPage} from '../chatlobby/chatlobby';

import {UserService} from '../../services/user';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [UserService]
})
export class LoginPage {
  formData: { email: string, password: string};


  constructor(private nav: NavController, private user: UserService) {

    this.formData = { 
      email: '', 
      password: ''
    }

  }


  login() {

    firebase.auth().signInWithEmailAndPassword(this.formData.email, this.formData.password)
    .then( (data) => {

      console.log(data);
      this.user['userId'] = data.uid;
      this.user['email'] = data.email;

      this.nav.setRoot(ChatlobbyPage);

    })
    .catch( (err) => {
      console.log(err);
    });

  }

  goToSignup() {
    this.nav.setRoot(SignupPage);
  }

}
