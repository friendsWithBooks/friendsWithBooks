import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { FbLogoutPage } from './fb-logout';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { OpaqueToken, Injectable, Inject } from "@angular/core";
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../app/app.component.ts';

import { MyBookStoreTabsPage } from '../my-book-store-tabs/my-book-store-tabs';

import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

import { global } from '../../app/service';

/*
  Generated class for the FbLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-fb-login',
	templateUrl: 'fb-login.html'
	// providers: [{ provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG }]
})

export class FbLoginPage {

	FB_APP_ID: number = 1858638574352432;
	userID: string;
	token: string;
	username: string;
	gender: string;
	email: string;
	location: any;
	user: any;
	userlat: any;
	userlong: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, public http: Http, public geolocation: Geolocation, public locationAccuracy: LocationAccuracy) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FbLoginPage');

		let env = this;

		let permissions = new Array();
		let nav = env.navCtrl;

		// the permissions your facebook app needs from the user
		permissions = ["public_profile", "user_friends", "user_location"];

		Facebook.login(permissions)
			.then(function (response) {
				let userId = response.authResponse.userID;
				let accessToken = response.authResponse.accessToken;
				let params = new Array();

				// Getting name, email and gender properties
				Facebook.api("/me?fields=name,gender,email,location", params)
					.then(function (user) {
						user.picture = "https://graph.facebook.com/" + userId + "/picture?type=small";
						//now we have the users info, let's save it in the NativeStorage
						NativeStorage.setItem('user',
							{
								userID: response.authResponse.userID,
								token: response.authResponse.accessToken,
								name: user.name,
								gender: user.gender,
								picture: user.picture,
								email: user.email,
								location: user.location
							})
							.then(function () {

								// console.log("Came into then");

								// env.locationAccuracy.canRequest().then((canRequest: boolean) => {

								// 	if (canRequest) {
								// 		// the accuracy option will be ignored by iOS
								// 		env.locationAccuracy.request(env.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
								// 			() => console.log('Request successful'),
								// 			error => console.log('Error requesting location permissions', error)
								// 		);
								// 	}

								// });


								// // Get user GeoLocation
								// env.geolocation.getCurrentPosition().then((resp) => {
								// 	console.log("Latitude is", resp.coords.latitude);
								// 	console.log("Long is", resp.coords.longitude);
								// 	// this.userlat = resp.coords.latitude
								// 	// this.userlong = resp.coords.longitude
								// }).catch((error) => {
								// 	console.log('Error getting location', error);
								// });

								// Now post the user details to the server
								var body = {
									'_id': response.authResponse.userID,
									'token': response.authResponse.accessToken,
									'name': user.name,
									'profilePic': user.picture,
									'location': user.location.name
								}

								// Set global variable userID to response.authResponse.userID
								global.userID = response.authResponse.userID;
								global.userToken = response.authResponse.accessToken;

								console.log("Body being pushed is ", body);

								// Storing the user details to server
								env.pushToServer(body);
								console.log("Post successful...")

								// Open MyBookStoreTabsPage as default page
								env.nav.setRoot(MyBookStoreTabsPage);
							}, function (error) {
								console.log(error);
							})
					})
			}, function (error) {
				console.log(error);
			});
		// });
	}

	pushToServer(body) {

		console.log("Called pushToServer");

		var url = global.serverIP + "users/";
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		this.http.post(url, body, options)
			.map(res => res)
			.subscribe();

		var putURl = url + global.userID;

		this.http.put(putURl, body, options)
			.map(res => res)
			.subscribe();

	}

}
