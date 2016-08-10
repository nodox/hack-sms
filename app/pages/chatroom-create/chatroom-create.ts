import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';


/*
  Generated class for the ChatroomCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/chatroom-create/chatroom-create.html',
})
export class ChatroomCreatePage {
    formData: { title: string };

    constructor(private nav: NavController, private viewCtrl: ViewController) {
        this.formData = { 
          title: ''
        }
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    createChatroom() {
        //https://firebase.google.com/docs/database/web/structure-data

        var roomRef = firebase.database().ref('room-metadata/');

        var newRoomRef = roomRef.push();
        
        var newRoom = {
            id: newRoomRef.key,
            name: this.formData.title,
            //type: roomType || 'public',
            //createdByUserId: this._userId,
            createdAt: firebase.database.ServerValue.TIMESTAMP 
        };

        newRoomRef.set(newRoom, (err) => {
            if(err) {
                console.log(err);
            }


            // enter the room


        });



        console.log(newRoom);

    }


}
