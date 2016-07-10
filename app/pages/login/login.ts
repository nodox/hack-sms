import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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
  //Ionic: Ionic;


  constructor(private nav: NavController, private http: Http) {

    this.formData = { 
      email: 'root@root.com', 
      password: 'rootroot'
    }
    //this.Ionic = Ionic;

  }


  login() {
    firebase.auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password).catch( (err) => {
      console.log(err);
    });

  }

}
