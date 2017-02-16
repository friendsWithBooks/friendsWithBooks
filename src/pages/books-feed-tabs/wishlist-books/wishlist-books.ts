import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishlistBooksPage');
	}

}
