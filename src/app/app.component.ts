import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';

import { MyProfilePage } from '../pages/my-profile/my-profile';
import { BooksFeedTabsPage } from '../pages/books-feed-tabs/books-feed-tabs';
import { MyBookStoreTabsPage } from '../pages/my-book-store-tabs/my-book-store-tabs';
import { FriendsPage } from '../pages/friends/friends';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';

import { FbLoginPage } from '../pages/fb-login/fb-login'
import { FbLogoutPage } from '../pages/fb-login/fb-logout'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = BooksFeedTabsPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Profile', component: MyProfilePage, icon: 'ion-ios-person' },
			{ title: 'Books Feed', component: BooksFeedTabsPage, icon: 'ion-ios-person' },
			{ title: 'My Book Store', component: MyBookStoreTabsPage, icon: 'ion-ios-person' },
			{ title: 'Friends', component: FriendsPage, icon: 'ion-ios-person' },
			{ title: 'Contact Us', component: ContactUsPage, icon: 'ion-ios-person' },
			{ title: 'Help', component: HelpPage, icon: 'ion-ios-person' },
			// { title: 'FB Login', component: FbLoginPage, icon: 'ion-ios-person' }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
