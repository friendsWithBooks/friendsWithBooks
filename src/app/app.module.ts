import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { MyProfilePage } from '../pages/my-profile/my-profile';

import { BooksFeedTabsPage } from '../pages/books-feed-tabs/books-feed-tabs';
import { WishlistBooksPage } from '../pages/books-feed-tabs/wishlist-books/wishlist-books';
import { TopBooksPage } from '../pages/books-feed-tabs/top-books/top-books';
import { FriendsActivityPage } from '../pages/books-feed-tabs/friends-activity/friends-activity';
import { ActionsPage } from '../pages/books-feed-tabs/actions/actions';

import { MyBookStoreTabsPage } from '../pages/my-book-store-tabs/my-book-store-tabs';
import { MyBooksPage } from '../pages/my-book-store-tabs/my-books/my-books';
import { BorrowedBooksPage } from '../pages/my-book-store-tabs/borrowed-books/borrowed-books';
import { LentBooksPage } from '../pages/my-book-store-tabs/lent-books/lent-books';
import { WishListPage } from '../pages/my-book-store-tabs/wish-list/wish-list';

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
    WishlistBooksPage,
    TopBooksPage,
    FriendsActivityPage,
    ActionsPage,
    MyBookStoreTabsPage,
    MyBooksPage,
    BorrowedBooksPage,
    LentBooksPage,
    WishListPage,
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
    WishlistBooksPage,
    TopBooksPage,
    FriendsActivityPage,
    ActionsPage,
    MyBookStoreTabsPage,
    MyBooksPage,
    BorrowedBooksPage,
    LentBooksPage,
    WishListPage,
    FriendsPage,
    ContactUsPage,
    HelpPage,
    FbLoginPage,
    FbLogoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
