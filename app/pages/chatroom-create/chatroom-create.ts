import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the ChatroomCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/chatroom-create/chatroom-create.html',
})
export class ChatroomCreatePage {

  constructor(private nav: NavController, private viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
