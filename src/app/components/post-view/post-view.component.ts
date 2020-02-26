import { faPen, faAlignCenter, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from './../../services/authentication.service';
import { LoadingService } from './../../services/loading.service';
import { PostsService } from './../../services/posts.service';
import { Paragraph } from './../../models/paragraph.type';
import { BlogPost } from 'src/app/models/blog-post.type';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post: BlogPost;
  destinationId: string;
  editedParagraph: Paragraph;
  isSubmittingEdits: boolean;

  faPen = faPen;
  faCenter = faAlignCenter;
  faRightToLeft = faAlignRight;

  constructor(
    public authenticationService: AuthenticationService,
    private loadingService: LoadingService,
    private postsService: PostsService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.destinationId = this.route.snapshot.paramMap.get('destinationId');
    const postId = this.route.snapshot.paramMap.get('postId');

    this.loadingService.changeIsLoading(true);
    this.post = await this.postsService.getPost(this.destinationId, postId);
    this.loadingService.changeIsLoading(false);
  }

  editParagraphText(paragraph: Paragraph) {
    this.editedParagraph = paragraph;
  }

  applyParagraphDirection(direction: string) {
    this.editedParagraph.direction = direction;
  }

  async finishParagraphEditing() {
    this.isSubmittingEdits = true;
    await this.postsService.updatePost(this.destinationId, this.post);
    this.editedParagraph = null;
    this.isSubmittingEdits = false;
  }
}
