import { BlogMediaPresenterComponent } from './components/blog-media-presenter/blog-media-presenter.component';
/* Built-in modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

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


@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DestinationsViewComponent,
    DestinationPostsViewComponent,
    PostViewComponent,
    BlogMediaPresenterComponent,
    HebrewMonthNamePipe
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders, CookieService]
})
export class AppModule { }
