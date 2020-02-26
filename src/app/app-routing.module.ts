import { LoginComponent } from './components/login/login.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { DestinationPostsViewComponent } from './components/destination-posts-view/destination-posts-view.component';
import { DestinationsViewComponent } from './components/destinations-view/destinations-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    component: DestinationsViewComponent
  },
  {
    path: 'destination/:destinationId',
    component: DestinationPostsViewComponent
  },
  {
    path: 'destination/:destinationId/post/:postId',
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
