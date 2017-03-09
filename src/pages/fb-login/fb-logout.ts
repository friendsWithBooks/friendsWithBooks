import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { FbLoginPage } from './fb-login'

@Component({
    selector: 'page-fb-logout',
    templateUrl: 'fb-logout.html'
})

export class FbLogoutPage {

    user: any;
    userReady: boolean = false;
    username: string;
    gender: string;
    picture: string;
    email: string;
    // friends: string;

    constructor(public navCtrl: NavController) {

        let env = this;

        NativeStorage.getItem('user')
            .then(function (data) {
                env.username = data.name,
                env.gender = data.gender,
                env.picture = data.picture,
                env.email = data.email
                // env.friends = data.friends
            }, function (error) {
                env.username = error
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
                console.log(error);
            });
    }
}