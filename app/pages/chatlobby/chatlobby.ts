import { Component } from '@angular/core';
import { NavController, NavParams, Modal } from 'ionic-angular';
import { ChatroomPage } from '../chatroom/chatroom';
import { ChatroomCreatePage } from '../chatroom-create/chatroom-create';


/*
  Generated class for the ChatlobbyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/chatlobby/chatlobby.html',
})
export class ChatlobbyPage {
  selectedRoom: any;
  chatrooms: Array<{title: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    this.selectedRoom = navParams.get('chatroom');
    //this.chatrooms = [{title: 'hello', name: 'first room'}];
    this.chatrooms = [];

  }

  chatroomTapped(event, chatroom) {
    this.nav.push(ChatroomPage, {
      chatroom: chatroom
    });
  }

  showModal() {
    let modal = Modal.create(ChatroomCreatePage);
    this.nav.present(modal);
  }


}
