import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

	borrowedbooks: Array<{ title: string, author: string, imglink: string }>;

	constructor(public navCtrl: NavController, public navParams: NavParams) { 

		this.borrowedbooks = [
			{ title: 'Title 1', author: "Author 1", imglink: 'link 1' },
			{ title: 'Title 2', author: "Author 2", imglink: 'link 2' },
			{ title: 'Title 3', author: "Author 3", imglink: 'link 3' },
			{ title: 'Title 4', author: "Author 5", imglink: 'link 4' },
			{ title: 'Title 5', author: "Author 4", imglink: 'link 5' }
		];

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BorrowedBooksPage');
	}

}
