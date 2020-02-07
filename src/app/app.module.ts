import { MainViewComponent } from './main-view-component/main-view-component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatVideoModule } from 'mat-video';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProgressBarDotsComponent } from './components/progress-bar-dots/progress-bar-dots.component';
import { DaysProgressionComponent } from './components/days-progression/days-progression.component';

import { httpInterceptorProviders } from './http-interceptors';
import { CurrentActivityComponent } from './components/current-activity/current-activity.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { TimestampPresenterComponent } from './components/timestamp-presenter/timestamp-presenter.component';
import { BlogPostContentPresenterComponent } from './components/blog-post-content-presenter/blog-post-content-presenter.component';
import { BlogMediaPresenterComponent } from './components/blog-media-presenter/blog-media-presenter.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DestinationsViewComponent } from './destinations-view/destinations-view.component';

const firebaseConfig = {
  apiKey: 'AIzaSyB1QdY-ajur89hEKNJfdRF_ejpttSgPpOY',
  authDomain: 'argentina-blog.firebaseapp.com',
  databaseURL: 'https://argentina-blog.firebaseio.com',
  projectId: 'argentina-blog',
  storageBucket: 'argentina-blog.appspot.com',
  messagingSenderId: '117618488444',
  appId: '1:117618488444:web:799b98b8d6d64045dc45f9',
  measurementId: 'G-4FW4FBRF27'
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule,
    BrowserAnimationsModule,
    MatVideoModule,
    NgxYoutubePlayerModule.forRoot(),
    GalleryModule.forRoot(),
    MatSnackBarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProgressBarDotsComponent,
    DaysProgressionComponent,
    CurrentActivityComponent,
    BlogPostsComponent,
    TimestampPresenterComponent,
    BlogPostContentPresenterComponent,
    BlogMediaPresenterComponent,
    MainViewComponent,
    DestinationsViewComponent
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders, CookieService]
})
export class AppModule {}
