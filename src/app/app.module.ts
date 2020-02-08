import { LoginComponent } from './components/login/login.component';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ProgressBarDotsComponent } from './components/progress-bar-dots/progress-bar-dots.component';
import { DaysProgressionComponent } from './components/days-progression/days-progression.component';

import { httpInterceptorProviders } from './http-interceptors';
import { CurrentActivityComponent } from './components/current-activity/current-activity.component';
import { TimestampPresenterComponent } from './components/timestamp-presenter/timestamp-presenter.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DestinationsViewComponent } from './destinations-view/destinations-view.component';
import { DestinationPostsViewComponent } from './destination-posts-view/destination-posts-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ParagraphsPreviewComponentComponent } from './paragraphs-preview-component/paragraphs-preview-component.component';

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
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProgressBarDotsComponent,
    DaysProgressionComponent,
    CurrentActivityComponent,
    TimestampPresenterComponent,
    LoginComponent,
    DestinationsViewComponent,
    DestinationPostsViewComponent,
    PostViewComponent,
    ParagraphsPreviewComponentComponent
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders, CookieService]
})
export class AppModule { }
