import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

/*
  Generated class for the Actions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-actions',
	templateUrl: 'actions.html'
})
export class ActionsPage {

	nots: Array<{ notifType: string, fromId: string, fromName: string, title: string, _id: string }>;
	isNotsEmpty: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.nots = [];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ActionsPage');

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "notify/notifications/" + userID;

		this.http.get(url, { headers: headers })
			.map(res => res.json())
			.subscribe(
			res => {
				console.log(res.length);
				// Empty this array as it'll be populated every time
				this.nots = [];
				console.log(JSON.stringify(res));
				for (var i = 0; i < res.length; i++) {
					this.nots.push(res[i]);
				}
				// console.log(this.nots[1].title);
			});

	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

	acceptRequest(book) {

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "notify/notifications/approve/" + userID;

		console.log(book);
		var body = book;

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe(
			res => { });
	}

	rejectRequest(book) {

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "notify/notifications/reject/" + userID;

		console.log(book);
		var body = book;

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe(
			res => { });
	}

	receivedBook(book){

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		var userID = global.userID;
		var url = global.serverIP + "borrowBook";

		console.log(book);
		var body = {
			bookId: book._id,
			title: book.title,
			fromId: book.fromId,
			fromName: book.fromName,
			toId: global.userID,
			toName: global.userName
		}

		console.log(body);

		this.http.post(url, body, options)
			.map(res => res.json())
			.subscribe(
			res => { });

	}

}
