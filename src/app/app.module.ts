import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { MyProfilePage } from '../pages/my-profile/my-profile';

import { BooksFeedTabsPage } from '../pages/books-feed-tabs/books-feed-tabs';
import { WishlistBooksPage } from '../pages/books-feed-tabs/wishlist-books/wishlist-books';
import { TopBooksPage } from '../pages/books-feed-tabs/top-books/top-books';
import { FriendsActivityPage } from '../pages/books-feed-tabs/friends-activity/friends-activity';
import { ActionsPage } from '../pages/books-feed-tabs/actions/actions';

import { MyBookStoreTabsPage } from '../pages/my-book-store-tabs/my-book-store-tabs';
import { MyBooksPage } from '../pages/my-book-store-tabs/my-books/my-books';
import { AddBooks } from '../pages/my-book-store-tabs/my-books/add-book-modal';
import { BorrowedBooksPage } from '../pages/my-book-store-tabs/borrowed-books/borrowed-books';
import { LentBooksPage } from '../pages/my-book-store-tabs/lent-books/lent-books';
import { WishListPage } from '../pages/my-book-store-tabs/wish-list/wish-list';
import { AddWishListBooks } from '../pages/my-book-store-tabs/wish-list/add-book-modal';

import { FriendsPage } from '../pages/friends/friends';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';

import { FbLoginPage } from '../pages/fb-login/fb-login'
import { FbLogoutPage } from '../pages/fb-login/fb-logout'

@NgModule({
  declarations: [
    MyApp,
    MyProfilePage,
    BooksFeedTabsPage,
    WishlistBooksPage,
    TopBooksPage,
    FriendsActivityPage,
    ActionsPage,
    MyBookStoreTabsPage,
    MyBooksPage,
    AddBooks,
    BorrowedBooksPage,
    LentBooksPage,
    WishListPage,
    AddWishListBooks,
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
    MyProfilePage,
    BooksFeedTabsPage,
    WishlistBooksPage,
    TopBooksPage,
    FriendsActivityPage,
    ActionsPage,
    MyBookStoreTabsPage,
    MyBooksPage,
    AddBooks,
    BorrowedBooksPage,
    LentBooksPage,
    WishListPage,
    AddWishListBooks,
    FriendsPage,
    ContactUsPage,
    HelpPage,
    FbLoginPage,
    FbLogoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
