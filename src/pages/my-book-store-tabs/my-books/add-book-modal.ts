import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
// import { MyBooksPage } from './my-books'

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

    @ViewChild('searchbox') myInput;

    private showList: boolean;
    items: any[];
    posts: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public http: Http, public loading: LoadingController, public alerCtrl: AlertController) {
        this.showList = false;
        this.initializeItems();
    }

    initializeItems() {
        this.items = [];
    }

    getItems(ev) {
        // Show the results
        this.showList = true;
        // Reset items back to all of the items
        this.initializeItems();
        // Show loader
        let loader = this.loading.create({
            content: `
                <div class="custom-spinner-container">
                    <div class="custom-spinner-box"></div>
                    <p>Fetching books...</p>
                </div>`,
        });
        loader.present().then(() => {
            var url = 'https://www.googleapis.com/books/v1/volumes?q=' + ev.target.value;
            this.http.get(url).map(res => res.json()).subscribe(data => {
                // console.log(data);
                this.items = data['items'];
                // for(var i=0; i<data['items'].length; i++){
                //     if(data['items'][i]['volumeInfo']['title']){
                //         // console.log(data['items'][i]['volumeInfo']['title']);
                //         this.items[i]['title'] = data['items'][i]['volumeInfo']['title'];
                //     }
                //     if(data['items'][i]['volumeInfo']['authors']){
                //         // console.log(data['items'][i]['volumeInfo']['authors']);
                //         this.items[i]['author'] = data['items'][i]['volumeInfo']['authors'];
                //     }
                //     if(data['items'][i]['volumeInfo']['imageLinks']['thumbnail']){
                //         // console.log(data['items'][i]['volumeInfo']['imageLinks']['thumbnail']);
                //         this.items[i]['imglink'] = data['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
                //     }
                //     else{
                //         this.items[i]['imglink'] = "NA"
                //     }
                // }
            });
            loader.dismiss()
            // document.getElementById('searchbox').focus();
            this.myInput.setFocus();
        });
    }

    confirmAdd(item) {
        console.log(item);
        let confirm = this.alerCtrl.create({
            title: 'Add this book to your racks?',
            subTitle: item['volumeInfo']['title'],// by item['volumeInfo']['authors']}}",
            message: item['volumeInfo']['authors'],
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: () => {
                        console.log('Add clicked');
                        this.dismiss(item);
                    }
                }
            ]
        });
        confirm.present()
    }

    onCancel(ev) {
        // Show the results
        this.showList = false;
        // Reset the field
        ev.target.value = '';
    }

    public dismiss(item) {
        // let data = { item };
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyBooksPage');
    }

}
