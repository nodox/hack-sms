import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ChatroomPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/chatroom/chatroom.html',
})
export class ChatroomPage {
  selectedChatroom: any;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an chatroom available as a nav param
    this.selectedChatroom = navParams.get('chatroom');
  }

  send(message) {

  }

}
