import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddBooks } from './add-book-modal';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

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
			console.log("Modal closed and got", data);
			var newItem = {
				_id: data['item']['id'],
				title: data['item']['volumeInfo']['title'],
				author: data['item']['volumeInfo']['authors'],
				image: 'Link new',
				rating: data['item']['volumeInfo']['averageRating'],
				availability: 'free'
			};

			console.log("New Item is ", newItem);

			var userID = global.userID;

			this.pushToServer(userID, newItem);
			this.mybooks.push(newItem);

		});
		contactModal.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyBooksPage');

		let env = this;

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "myRacks/" + userID;

		// Empty mybooks as it'll be populated by server
		env.mybooks = [];

		env.http.get(url, { headers: headers })
			.map(res => res.json())
			.subscribe(
			res => {
				console.log("Res is ", res);
				if (res == 'null' || res == '') {
					console.log("MyBooks result is null");
					// this.mybooks = [];
				}
				else {
					console.log("MyBooks result is not null");
					console.log(res.length);
					for (var i = 0; i < res.length; i++) {
						// console.log("I is ", res[i]);
						env.mybooks.push(res[i]);
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

		console.log("Called pushToServer");

		var url = global.serverIP + "myRacks/add/" + userID + "/";
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe();

	}

	deleteBook(body) {
		console.log("Want to delete?", body);

		var url = global.serverIP + "myRacks/remove/" + global.userID;

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