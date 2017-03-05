import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddBooks } from './add-book-modal';

/*
  Generated class for the MyBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-my-books',
	templateUrl: 'my-books.html'
})

export class MyBooksPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

	}

	presentContactModal() {
		let contactModal = this.modalCtrl.create(AddBooks);
		contactModal.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyBooksPage');
	}

}
