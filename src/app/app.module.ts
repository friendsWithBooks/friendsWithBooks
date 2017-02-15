import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { MyProfilePage } from '../pages/my-profile/my-profile';
import { BooksFeedTabsPage } from '../pages/books-feed-tabs/books-feed-tabs';
import { MyBookStoreTabsPage } from '../pages/my-book-store-tabs/my-book-store-tabs';
import { FriendsPage } from '../pages/friends/friends';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';

import { FbLoginPage } from '../pages/fb-login/fb-login'
import { FbLogoutPage } from '../pages/fb-login/fb-logout'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    MyProfilePage,
    BooksFeedTabsPage,
    MyBookStoreTabsPage,
    FriendsPage,
    ContactUsPage,
    HelpPage,
    FbLoginPage,
    FbLogoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    MyProfilePage,
    BooksFeedTabsPage,
    MyBookStoreTabsPage,
    FriendsPage,
    ContactUsPage,
    HelpPage,
    FbLoginPage,
    FbLogoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
