import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WishlistBooksPage } from './wishlist-books/wishlist-books';
import { TopBooksPage } from './top-books/top-books';
import { FriendsActivityPage } from './friends-activity/friends-activity';
import { ActionsPage } from './actions/actions';

// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

/*
  Generated class for the BooksFeedTabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-books-feed-tabs',
	templateUrl: 'books-feed-tabs.html'
})
export class BooksFeedTabsPage {

	constructor() { }
	// public navCtrl: NavController, public navParams: NavParams

	tab1Root: any = WishlistBooksPage;
	tab2Root: any = TopBooksPage;
	tab3Root: any = FriendsActivityPage;
	tab4Root: any = ActionsPage;

	ionViewDidLoad() {
		console.log('ionViewDidLoad BooksFeedTabsPage');
	}

}
