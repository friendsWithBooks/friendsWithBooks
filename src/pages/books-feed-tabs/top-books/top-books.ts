import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad TopBooksPage');
	}

}
