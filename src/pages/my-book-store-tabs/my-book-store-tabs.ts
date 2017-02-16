import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyBooksPage } from './my-books/my-books';
import { BorrowedBooksPage } from './borrowed-books/borrowed-books';
import { LentBooksPage } from './lent-books/lent-books';
import { WishListPage } from './wish-list/wish-list';

/*
  Generated class for the MyBookStoreTabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-my-book-store-tabs',
	templateUrl: 'my-book-store-tabs.html'
})

export class MyBookStoreTabsPage {

	constructor() { }
	// public navCtrl: NavController, public navParams: NavParams

	tab1Root: any = MyBooksPage;
	tab2Root: any = BorrowedBooksPage;
	tab3Root: any = LentBooksPage;
	tab4Root: any = WishListPage;

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyBookStoreTabsPage');
	}

}
