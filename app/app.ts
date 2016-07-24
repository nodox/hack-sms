import {Component, ViewChild} from '@angular/core';
import {disableDeprecatedForms, provideForms } from '@angular/forms';

import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';

import {ListPage} from './pages/list/list';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';

import {ChatlobbyPage} from './pages/chatlobby/chatlobby';


import * as firebase from 'firebase';



@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Chatlobby', component: ChatlobbyPage },
      { title: 'Chatlobby', component: ChatlobbyPage }
    ];
  }

  initializeApp() {
    const
        fbConf = {
        apiKey: "AIzaSyC69ujHgbNIdGP3Ls4UDqaJAw8NU60sLME",
        authDomain: "hack-sms.firebaseapp.com",
        databaseURL: "https://hack-sms.firebaseio.com",
        storageBucket: "hack-sms.appspot.com",
    };
    firebase.initializeApp(fbConf);
    disableDeprecatedForms();
    provideForms();
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
