import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddWishListBooks } from './add-book-modal';

/*
  Generated class for the WishList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-wish-list',
	templateUrl: 'wish-list.html'
})

export class WishListPage {

	wishlistbooks: Array<{ title: string, author: string, imglink: string }>;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) { 

		this.wishlistbooks = [
			{ title: 'Title 1', author: "Author 1", imglink: 'link 1' },
			{ title: 'Title 2', author: "Author 2", imglink: 'link 2' },
			{ title: 'Title 3', author: "Author 3", imglink: 'link 3' },
			{ title: 'Title 4', author: "Author 5", imglink: 'link 4' },
			{ title: 'Title 5', author: "Author 4", imglink: 'link 5' }
		];

	}

	presentContactModal() {
		let contactModal = this.modalCtrl.create(AddWishListBooks);
		contactModal.onDidDismiss(data => {
			console.log(data);
			var newItem = { title: data['item']['volumeInfo']['title'], author: data['item']['volumeInfo']['authors'], imglink: 'Link new' };
			this.wishlistbooks.push(newItem);
		});
		contactModal.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishListPage');
	}

}
