import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatroomPage } from '../chatroom/chatroom';

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
  chatrooms: Array<{title: string, name: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    this.selectedRoom = navParams.get('chatroom');
    this.chatrooms = [{title: 'hello', name: 'first room'}];

  }

  chatroomTapped(event, chatroom) {
    this.nav.push(ChatroomPage, {
      chatroom: chatroom
    });
  }

}
