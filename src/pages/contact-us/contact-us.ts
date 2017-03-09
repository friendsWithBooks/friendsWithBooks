import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';

/*
  Generated class for the ContactUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-contact-us',
	templateUrl: 'contact-us.html'
})

export class ContactUsPage {

	username: string = "Azharullah";
	email: string = "shariffazharullah@gmail.com";

	// constructor(public navCtrl: NavController, public navParams: NavParams) {

		// NativeStorage.getItem('user')
		// 	.then(function (data) {
		// 		this.username = data.name,
		// 		this.email = data.email
		// 		// this.friends = data.friends
		// 	}, function (error) {
		// 		this.username = "NA",
		// 		this.email = "NA"
		// 	});
	// }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ContactUsPage');
	}

}
