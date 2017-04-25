import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

/*
  Generated class for the BorrowedBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-borrowed-books',
	templateUrl: 'borrowed-books.html'
})

export class BorrowedBooksPage {

	borrowedbooks: Array<{ _id: string, rating: string, title: string, author: string, image: string, fromId: string, fromName: string }>;
	bookslength: boolean = false;
	userID: string;
	url: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.borrowedbooks = [];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BorrowedBooksPage');

		let env = this;

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "booksBorrowed/" + userID;

		// Empty mybooks as it'll be populated by server
		env.borrowedbooks = [];

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
						// console.log("I is ", res[i]);
						env.borrowedbooks.push(res[i]);
					}
					if(env.borrowedbooks.length == 0){
						env.bookslength = false;
					}
					else{
						env.bookslength = true;
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
