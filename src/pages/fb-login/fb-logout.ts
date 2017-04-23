import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { FbLoginPage } from './fb-login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-fb-logout',
    templateUrl: 'fb-logout.html'
})

export class FbLogoutPage {

    user: any;
    userReady: boolean = false;
    userID: string;
    token: string;
    username: string;
    gender: string;
    picture: string;
    email: string;
    location: any;
    // friends: string;

    constructor(public navCtrl: NavController, public http: Http) {

        let env = this;

        NativeStorage.getItem('user')
            .then(function (data) {
                env.userID = data.userID,
                    env.token = data.token,
                    env.username = data.name,
                    env.gender = data.gender,
                    env.picture = data.picture,
                    env.email = data.email,
                    env.location = data.location
                // env.friends = data.friends

                // var body = {
                //     '_id': env.userID,
                //     'token': env.token,
                //     'name': env.username,
                //     'profilePic': env.picture
                // }

                // var url = "http://192.168.40.56:3000/users/" + body._id;
                // console.log(url, body);
                // this.http.get(url);
                // this.http.post(url, JSON.stringify(body), {
                // })
                // .map(res => res.json())
                // .subscribe(
                // data => this.saveJwt(data.id_token),
                // err => this.logError(err),
                // () => console.log('Authentication Complete')
                // );
                // this.http.get(url)
                //     .map(res => res.text())
                //     .subscribe(
                //     data => this.randomQuote = data,
                //     err => this.logError(err),
                //     () => console.log('Random Quote Complete')
                //     );
            }, function (error) {
                console.log("Error is", error);
            });
    }

    ionViewCanEnter() {
        let env = this;
        NativeStorage.getItem('user')
            .then(function (data) {
                env.user = {
                    name: data.name,
                    gender: data.gender,
                    picture: data.picture
                };
                env.userReady = true;
            }, function (error) {
                console.log(error);
            });
    }

    doFbLogout() {
        var nav = this.navCtrl;
        Facebook.logout()
            .then(function (response) {
                //user logged out so we will remove him from the NativeStorage
                NativeStorage.remove('user');
                nav.push(FbLoginPage);
            }, function (error) {
                console.log("This error", error);
            });
    }
}