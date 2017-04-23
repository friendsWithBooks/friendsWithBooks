import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

	wishListBooks: Array<{ bookName: string, userName: string, title: string, author: string, image: string, availability: string }>;
	result: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.wishListBooks = [];
	 }

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishlistBooksPage');

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "myRacks/" + userID;

		this.http.get(url, { headers: headers })
			.map(res => res.json())
			.subscribe(
			res => {
				console.log("Res is ", res);
				
			});

	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

}
