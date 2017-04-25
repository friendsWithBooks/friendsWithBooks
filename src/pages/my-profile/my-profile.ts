import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../app/service';

/*
  Generated class for the MyProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-my-profile',
	templateUrl: 'my-profile.html'
})
export class MyProfilePage {

	profile: any;
	userID: any;
	picture: any;
	myRacks: any;
	name: any;
	borrowCount: any;
	lentCount: any;
	userName: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

		var url = global.serverIP + "users/" + global.userID;
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

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyProfilePage');
	}

}
