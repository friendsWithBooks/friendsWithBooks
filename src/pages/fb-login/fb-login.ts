import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { FbLogoutPage } from './fb-logout';

/*
  Generated class for the FbLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-fb-login',
	templateUrl: 'fb-login.html'
})

export class FbLoginPage {

	FB_APP_ID: number = 1858638574352432;
	username: string;
	gender: string;
	email: string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// Facebook.browserInit(this.FB_APP_ID, "v2.8");
	}

	doFbLogin() {
		let permissions = new Array();
		let nav = this.navCtrl;
		// the permissions your facebook app needs from the user
		permissions = ["public_profile"];

		Facebook.login(permissions)
			.then(function (response) {
				let userId = response.authResponse.userID;
				let params = new Array();

		// Getting name and gender properties
		Facebook.api("/me?fields=name,gender,email", params)
			.then(function (user) {
				user.picture = "https://graph.facebook.com/" + userId + "/picture?type=small";
				// user.friends = "https://graph.facebook.com/" + userId + "/friendlists"
				//now we have the users info, let's save it in the NativeStorage
				NativeStorage.setItem('user',
					{
						name: user.name,
						gender: user.gender,
						picture: user.picture,
						email: user.email
						// friends: user.friends
					})
					.then(function () {
						nav.push(FbLogoutPage);
					}, function (error) {
						console.log(error);
					})
			})
		}, function (error) {
			console.log(error);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FbLoginPage');
	}

}
