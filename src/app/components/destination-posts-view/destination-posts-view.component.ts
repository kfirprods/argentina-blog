import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
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
  hasNoPosts: boolean;
  destinationId: string;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    this.posts = null;
  }

  ngOnInit() {
    this.destinationId = this.route.snapshot.paramMap.get('destinationId');

    this.db.collection<BlogPost>(`/destinations/${this.destinationId}/posts`)
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(change => {
          const blogPost = change.payload.doc.data() as BlogPost;
          blogPost.id = change.payload.doc.id;

          return blogPost;
        });
      }))
      .subscribe(posts => {
        this.posts = posts.sort((post1, post2) => {
          if (post1.uploadTime.seconds >  post2.uploadTime.seconds) {
            return -1;
          } else {
            return 1;
          }
        });
      });
  }
}
