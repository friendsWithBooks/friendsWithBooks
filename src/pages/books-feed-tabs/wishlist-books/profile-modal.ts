import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

/*
  Generated class for the MyBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'profile-modal',
    templateUrl: 'profile-modal.html'
})

export class getProfile {

    profile: any;
    userID: any;
    picture: any;
    myRacks: any;
    name: any;
    borrowCount: any;
    lentCount: any;
    userName: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public http: Http, public alerCtrl: AlertController) {

        this.userID = this.navParams['data'].userId;
        this.userName = this.navParams['data'].name;
        console.log("USER ID in modal", this.navParams['data'].name);
        var url = global.serverIP + "users/" + this.userID;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(url, options)
            .map(res => res.json())
            .subscribe(
            res => {
                console.log("Profile details:", res);
                this.profile = res;
                // console.log("Profile details123:", this.profile.name);
                this.picture = this.profile.profilePic;
                this.myRacks = this.profile.myRacks;
                this.name = this.profile.name;
                this.borrowCount = this.profile.borrowCount;
                this.lentCount = this.profile.lentCount;
            });

    }

    requestBook(book) {

        var url = global.serverIP + "notify/requestItem/" + this.userID;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        var body = {
            _id: book._id,
            toId: this.userID,
            toName: this.userName,
            title: book.title,
            fromId: global.userID,
            fromName: global.userName,
            notifType: 'borrowRequest'
        }

        console.log("Body created is ", body);

        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            res => { });

    }

    public dismiss(item) {
        let data = { item };
        this.viewCtrl.dismiss(data);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyBooksPage');
    }

}
