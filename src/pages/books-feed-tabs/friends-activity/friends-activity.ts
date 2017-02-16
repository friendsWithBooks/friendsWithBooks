import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad FriendsActivityPage');
	}

}
