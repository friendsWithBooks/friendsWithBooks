import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the MyBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'add-book-modal',
	templateUrl: 'add-book-modal.html'
})

export class AddBooks {

	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

	}

    dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyBooksPage');
	}

}
