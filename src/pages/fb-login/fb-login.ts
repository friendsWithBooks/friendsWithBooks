import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { FbLogoutPage } from './fb-logout';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { OpaqueToken, Injectable, Inject } from "@angular/core";
import { MY_CONFIG_TOKEN, MY_CONFIG, ApplicationConfig } from '../../app/app.component.ts';

import { MyBookStoreTabsPage } from '../my-book-store-tabs/my-book-store-tabs';

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

	private appName: string;
	private endPoint: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav, public http: Http) {
		// Facebook.browserInit(this.FB_APP_ID, "v2.8");
		// this.appName = config.appName;
		// this.endPoint = config.apiEndpoint;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FbLoginPage');

		let env = this;
		NativeStorage.getItem('user')
			.then(function (data) {
				// env.nav.push(FbLogoutPage);
				env.nav.setRoot(MyBookStoreTabsPage);
			}, function (error) {
				//we don't have the user data so we will ask him to log in
				// env.nav.push(FbLogoutPage);

				let permissions = new Array();
				let nav = env.navCtrl;
				// the permissions your facebook app needs from the user
				permissions = ["public_profile"];

				Facebook.login(permissions)
					.then(function (response) {
						let userId = response.authResponse.userID;
						let accessToken = response.authResponse.accessToken;
						let params = new Array();

						// Getting name, email and gender properties
						Facebook.api("/me?fields=name,gender,email", params)
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
										email: user.email
									})
									.then(function () {
										// Now post the user details to the server
										var body = {
											'_id': response.authResponse.userID,
											'token': response.authResponse.accessToken,
											'name': user.name,
											'profilePic': user.picture,
										}

										console.log("Body is ", body);

										env.pushToServer(body);

										console.log("Post successful...")
										env.nav.push(FbLogoutPage);
									}, function (error) {
										console.log(error);
									})
							})
					}, function (error) {
						console.log(error);
					});
			});
	}

	pushToServer(body) {

		console.log("Called pushToServer");

		var url = "http://192.168.40.160:3000/users/";
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe();

	}

}
