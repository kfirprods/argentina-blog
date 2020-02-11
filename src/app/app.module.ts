/* Built-in modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* External libraries */
import { CookieService } from 'ngx-cookie-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* My libraries */
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { DestinationsViewComponent } from './components/destinations-view/destinations-view.component';
import { DestinationPostsViewComponent } from './components/destination-posts-view/destination-posts-view.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { HebrewMonthNamePipe } from './pipes/hebrew-month-name.pipe';

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
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DestinationsViewComponent,
    DestinationPostsViewComponent,
    PostViewComponent,
    HebrewMonthNamePipe
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders, CookieService]
})
export class AppModule { }
