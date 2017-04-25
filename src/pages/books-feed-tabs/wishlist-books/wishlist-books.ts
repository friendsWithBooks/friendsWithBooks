import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { getProfile } from './profile-modal';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

/*
  Generated class for the WishlistBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-wishlist-books',
	templateUrl: 'wishlist-books.html'
})

export class WishlistBooksPage {

	wishListBooks: Array<{ _id: string, name: string, image: string }>;
	result: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public modalCtrl: ModalController) {
		this.wishListBooks = [];
	}

	presentContactModal(userID) {
		let contactModal = this.modalCtrl.create(getProfile, { userId: userID._id, name: userID.name });
		contactModal.onDidDismiss(data => {
			console.log("Modal closed and got", data);

			// if (data['item']) {
			// 	console.log("Still going into this");
			// 	var newItem = {
			// 		_id: data['item']['id'],
			// 		title: data['item']['volumeInfo']['title'],
			// 		author: data['item']['volumeInfo']['authors'],
			// 		image: 'Link new',
			// 		rating: data['item']['volumeInfo']['averageRating'],
			// 		availability: 'free'
			// 	};

			// 	console.log("New Item is ", newItem);

				var userID = global.userID;

				// this.pushToServer(userID, newItem);
				// this.mybooks.push(newItem);
			// }

		});
		contactModal.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishlistBooksPage');

		let env = this;

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "location/neighbours";

		var body = {
			userId: global.userID
		}

		// Empty mybooks as it'll be populated by server
		env.wishListBooks = [];

		env.http.post(url, body, options)
			.map(res => res.json())
			.subscribe(
			res => {
				console.log("Res is ", res);
				env.result = res;

				console.log("RESSS is", env.result);
				if (env.result == 'null' || env.result == '') {
					console.log("MyBooks result is null");
					// this.mybooks = [];
				}
				else {
					console.log("MyBooks result is not null");
					console.log(typeof (env.result));
					for (var i = 0; i < env.result.length; i++) {
						// console.log("I is ", res[i]);
						env.wishListBooks.push(env.result[i]);
					}
				}
			});

	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

}
