import { BlogPost } from 'src/app/models/blog-post.type';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post: BlogPost;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    this.post = null;
  }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('postId');

    this.db.collection('posts').doc(postId).get().subscribe(post => {
      this.post = post.data() as BlogPost;
    });
  }

}
