import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Facebook, NativeStorage } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { MyProfilePage } from '../pages/my-profile/my-profile';

import { BooksFeedTabsPage } from '../pages/books-feed-tabs/books-feed-tabs';
import { WishlistBooksPage } from '../pages/books-feed-tabs/wishlist-books/wishlist-books';
import { TopBooksPage } from '../pages/books-feed-tabs/top-books/top-books';
import { FriendsActivityPage } from '../pages/books-feed-tabs/friends-activity/friends-activity';
import { ActionsPage } from '../pages/books-feed-tabs/actions/actions';

import { MyBookStoreTabsPage } from '../pages/my-book-store-tabs/my-book-store-tabs';
import { MyBooksPage } from '../pages/my-book-store-tabs/my-books/my-books';
import { BorrowedBooksPage } from '../pages/my-book-store-tabs/borrowed-books/borrowed-books';
import { LentBooksPage } from '../pages/my-book-store-tabs/lent-books/lent-books';
import { WishListPage } from '../pages/my-book-store-tabs/wish-list/wish-list';

import { FriendsPage } from '../pages/friends/friends';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';

import { global } from './service';

// import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';

import { FbLoginPage } from '../pages/fb-login/fb-login';
import { FbLogoutPage } from '../pages/fb-login/fb-logout';

import { Geolocation } from 'ionic-native';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage = FbLogoutPage;

	pages: Array<{ title: string, component: any, icon: string }>;

	result: any;
	FB_APP_ID: number = 1858638574352432;
	userID: string;
	token: string;
	username: string;
	gender: string;
	email: string;
	profilePicture: string;

	constructor(public platform: Platform) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'My Profile', component: MyProfilePage, icon: 'person' },
			{ title: 'Books Feed', component: BooksFeedTabsPage, icon: 'notifications' },
			{ title: 'My Book Store', component: MyBookStoreTabsPage, icon: 'cart' },
			{ title: 'Friends', component: FriendsPage, icon: 'people' },
			{ title: 'Contact Us', component: ContactUsPage, icon: 'send' },
			{ title: 'Help', component: HelpPage, icon: 'help-circle' },
			{ title: 'FB Login', component: FbLogoutPage, icon: 'person' }
		];

	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	initializeApp() {
		this.platform.ready().then(() => {

			// Here we will check if the user is already logged in
			// because we don't want to ask users to log in each time they open the app
			let env = this;

			// env.locationAccuracy.canRequest().then((canRequest: boolean) => {

			// 	if (canRequest) {
			// 		// the accuracy option will be ignored by iOS
			// 		env.locationAccuracy.request(env.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
			// 			() => console.log('Request successful'),
			// 			error => console.log('Error requesting location permissions', error)
			// 		);
			// 	}

			// });

			// env.geolocation.getCurrentPosition().then((resp) => {
			// 	console.log("Latitude is", resp.coords.latitude);
			// 	console.log("Long is", resp.coords.longitude);
			// 	// this.userlat = resp.coords.latitude
			// 	// this.userlong = resp.coords.longitude
			// }).catch((error) => {
			// 	console.log('Error getting location', error);
			// });

			// Check if userID is stored

			NativeStorage.getItem('user')
				.then(function (data) {
					global.userID = data.userID
					console.log("This is in service....@@@@");
				}, function (error) {
					console.log("Error is", error);
				});

			// env.nav.push(FbLoginPage);
			if (global.userID == 'none') {
				// Push to FbLoginPage to force FB login
				env.nav.push(FbLoginPage);
			}
			else {
				env.nav.push(MyBookStoreTabsPage);
			}

			// Pushing to temporary pages for testing but app wont work without FB login
			// env.nav.push(MyBookStoreTabsPage);

			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}
}