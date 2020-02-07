import { PostViewComponent } from './post-view/post-view.component';
import { DestinationPostsViewComponent } from './destination-posts-view/destination-posts-view.component';
import { LoginComponent } from './components/login/login.component';
import { DestinationsViewComponent } from './destinations-view/destinations-view.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    component: DestinationsViewComponent
  },
  {
    path: 'destination/:id',
    component: DestinationPostsViewComponent
  },
  {
    path: 'posts/:id',
    component: PostViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
