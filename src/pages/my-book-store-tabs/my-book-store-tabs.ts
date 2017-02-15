import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

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

	tab1Root: any = HomePage;
	tab2Root: any = AboutPage;
	tab3Root: any = ContactPage;
	tab4Root: any = ContactPage;

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyBookStoreTabsPage');
	}

}
