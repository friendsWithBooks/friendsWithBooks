import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { global } from '../../../app/service';

/*
  Generated class for the TopBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-top-books',
	templateUrl: 'top-books.html'
})
export class TopBooksPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad TopBooksPage');
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

}
