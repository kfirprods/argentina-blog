import { DestinationsService } from './../../services/destinations.service';
import { PostsService } from './../../services/posts.service';
import { Destination } from './../../models/destination.type';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/models/blog-post.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-posts-view',
  templateUrl: './destination-posts-view.component.html',
  styleUrls: ['./destination-posts-view.component.scss']
})
export class DestinationPostsViewComponent implements OnInit {
  posts: Array<BlogPost>;
  hasNoPosts: boolean;
  destinationId: string;
  destination: Destination;
  isLoading: boolean;

  constructor(
    private destinationsService: DestinationsService,
    private postsService: PostsService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.isLoading = true;
    this.destinationId = this.route.snapshot.paramMap.get('destinationId');

    const posts = await this.postsService.getPosts(this.destinationId);
    this.posts = posts.sort((post1, post2) => {
      if (post1.uploadTime > post2.uploadTime) {
        return -1;
      } else {
        return 1;
      }
    });

    this.destination = await this.destinationsService.getDestination(this.destinationId);

    this.isLoading = false;
  }
}
