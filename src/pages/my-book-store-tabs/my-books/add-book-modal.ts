import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

    private showList: boolean;
    items: any[];
    posts: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public http: Http) {
        this.showList = false;
        this.initializeItems();
        this.http.get('https://www.googleapis.com/books/v1/volumes?q=cormen').map(res => res.json()).subscribe(data => {
            this.items = data.totalItems;
        });
    }

    initializeItems() {
        this.items = [];
    }

    getItems(ev) {
        // Show the results
        this.showList = true;
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        // let val = ev.target.value;
        // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //     this.items = this.items.filter((item) => {
        //         return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //     })
        // }
        this.http.get('https://www.googleapis.com/books/v1/volumes?q=cormen').map(res => res.json()).subscribe(data => {
            this.items = data.totalItems;
        });
    }



    onCancel(ev) {
        // Show the results
        this.showList = false;
        // Reset the field
        ev.target.value = '';
    }

    dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyBooksPage');
    }

}
