import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddBooks } from './add-book-modal';

import { NativeStorage } from 'ionic-native';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-my-books',
	templateUrl: 'my-books.html'
})

export class MyBooksPage {

	mybooks: Array<{ _id: string, rating: string, title: string, author: string, image: string, availability: string }>;
	result: any;
	userID: string;
	url: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
		this.mybooks = [];
	};

	presentContactModal() {
		let contactModal = this.modalCtrl.create(AddBooks);
		contactModal.onDidDismiss(data => {
			console.log(data);
			var newItem = {
				_id: data['id'],
				title: data['item']['volumeInfo']['title'],
				author: data['item']['volumeInfo']['authors'],
				image: 'Link new',
				rating: data['item']['volumeInfo']['averageRating'],
				availability: 'free'
			};

			let env = this;
			// push newItem to server
			NativeStorage.getItem('user')
				.then(function (data) {
					// this.userID = data.userID;
					console.log("Got userID", data.userID);
					// Now push the user's new mybook to server
					env.pushToServer(data.userID, newItem);
					// Now push to mybooks (temporary array)
					env.mybooks.push(newItem);
				},
				function (error) {
					console.log(error);
				});
		});
		contactModal.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyBooksPage');

		let env = this;
		NativeStorage.getItem('user')
			.then(function (data) {
				env.userID = data.userID;
				console.log("Got userID", env.userID);
				// Now get the user's mybooks from server
				var url = "http://192.168.40.160:3000/myRacks/" + env.userID;
				console.log("Got url", url);
				let headers = new Headers({ 'Content-Type': 'application/json' });
				let options = new RequestOptions({ headers: headers });

				// Empty mybooks as it'll be populated by server
				env.mybooks = [];

				env.http.get(url, { headers: headers })
					.map(res => res.json())
					.subscribe(
					res => {
						console.log("Res is ", res);
						if (res.length == 0) {
							console.log("MyBooks result is null");
							// this.mybooks = [];
						}
						else {
							console.log("MyBooks result is not null");
							console.log(res.length);
							for (var i = 0; i < res.length; i++) {
								console.log("I is ", res[i]);
								env.mybooks.push(res[i]);
							}
						}
					},
				);

			}, function (error) {
				console.log(error);
			});
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

	pushToServer(userID, body) {

		console.log("Called pushToServer");

		var url = "http://192.168.40.160:3000/myRacks/add/" + userID + "/";
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe();

	}

}
