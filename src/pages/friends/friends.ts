import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NativeStorage } from 'ionic-native';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../app/service';

/*
  Generated class for the Friends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-friends',
	templateUrl: 'friends.html'
})

export class FriendsPage {

	// friendsList: Array<{ userId: string, name: string }>;
	friendsList: any;
	userID: string;
	token: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.friendsList = [];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FriendsPage');

		var url = global.serverIP + "friends/" + global.userID;
		
		// NativeStorage.getItem('user')
        //     .then(function (data) {
		// 		this.token = data.token
		// 	},
		// 	function (error) {
        //         console.log("Error is", error);
        //     });
		
		var body = {
			userAccessToken: global.userToken
		};

		console.log(body.userAccessToken);

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe(data => {
                console.log("Data is", data);
                this.friendsList = data;
				console.log("Friends List:", this.friendsList);
			}
			);

	}

}
