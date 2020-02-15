import { Paragraph } from './../../models/paragraph.type';
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
  paragraphs: Paragraph[];

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const destinationId = this.route.snapshot.paramMap.get('destinationId');
    const postId = this.route.snapshot.paramMap.get('postId');
    console.log(`/destinations/${destinationId}/posts/${postId}`);
    this.db.collection(`/destinations/${destinationId}/posts`).doc<BlogPost>(postId)
    .valueChanges()
    .subscribe(post => {
      console.log(post);
      this.post = post;
      console.log(this.post);
    });

    this.db.collection<Paragraph>(`/destinations/${destinationId}/posts/${postId}/paragraphs`)
    .valueChanges()
    .subscribe(paragraphs => {
      this.paragraphs = paragraphs.sort((paragraph1, paragraph2) => {
        if (paragraph1.index < paragraph2.index) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }

}
