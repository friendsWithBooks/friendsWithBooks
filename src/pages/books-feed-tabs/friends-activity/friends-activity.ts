import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

/*
  Generated class for the FriendsActivity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-friends-activity',
	templateUrl: 'friends-activity.html'
})
export class FriendsActivityPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad FriendsActivityPage');
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

}
