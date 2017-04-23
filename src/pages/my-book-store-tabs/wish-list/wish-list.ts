import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddWishListBooks } from './add-book-modal';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

/*
  Generated class for the WishList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-wish-list',
	templateUrl: 'wish-list.html'
})

export class WishListPage {

	wishlistbooks: Array<{ _id: string, rating: string, title: string, author: string, image: string, availability: string }>;
	result: any;
	userID: string;
	url: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
		this.wishlistbooks = [];
	}

	presentContactModal() {
		let contactModal = this.modalCtrl.create(AddWishListBooks);
		contactModal.onDidDismiss(data => {
			console.log("Modal closed and got", data);
			var newItem = {
				_id: data['item']['id'],
				title: data['item']['volumeInfo']['title'],
				author: data['item']['volumeInfo']['authors'],
				image: 'Link new',
				rating: data['item']['volumeInfo']['averageRating'],
				availability: 'free'
			};

			var userID = global.userID;

			this.pushToServer(userID, newItem);
			this.wishlistbooks.push(newItem);
		});
		contactModal.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishListPage');

		let env = this;

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "wishlist/" + userID;

		// Empty wishlistbooks as it'll be populated by server
		env.wishlistbooks = [];

		env.http.get(url, { headers: headers })
			.map(res => res.json())
			.subscribe(
			res => {
				console.log("Res is ", res);
				if (res.length == 0) {
					console.log("wishlistbooks result is null");
					// this.wishlistbooks = [];
				}
				else {
					console.log("wishlistbooks result is not null");
					console.log(res.length);
					for (var i = 0; i < res.length; i++) {
						// console.log("I is ", res[i]);
						env.wishlistbooks.push(res[i]);
					}
				}
			});
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

	pushToServer(userID, body) {

		console.log("This was sent.....####\n\n\n\n");

		console.log("Called pushToServer with", body);

		console.log("This was sent.....####");

		var url =  global.serverIP + "wishlist/add/" + userID + "/";
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe();

	}

	deleteBook(body) {
		console.log("Want to delete?", body);

		var url = global.serverIP + "wishlist/remove/" + global.userID;

		console.log("URL is", url);

		console.log("Deleting ", body);

		var newItem = {
			_id: body
		}

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({
			headers: headers,
			body: newItem
		});

		this.http.delete(url, options)
			.map(res => res)
			.subscribe();
	}

}
