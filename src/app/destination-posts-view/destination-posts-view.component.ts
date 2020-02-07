import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BlogPost } from 'src/app/models/blog-post.type';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-destination-posts-view',
  templateUrl: './destination-posts-view.component.html',
  styleUrls: ['./destination-posts-view.component.scss']
})
export class DestinationPostsViewComponent implements OnInit {
  posts: Array<BlogPost>;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    this.posts = null;
  }

  ngOnInit() {
    const destinationId = this.route.snapshot.paramMap.get('id');

    this.db.collection<BlogPost>('/posts', ref => ref.where('destinationId', '==', destinationId)).valueChanges().subscribe(posts => {
      this.posts = posts.sort((post1, post2) => {
        if (post1.uploadTime.seconds < post2.uploadTime.seconds) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }
}
