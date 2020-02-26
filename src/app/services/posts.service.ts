import { BlogPost } from './../models/blog-post.type';
import { AuthenticationService } from './authentication.service';
import { serverAddress } from './consts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  async getPosts(destinationId: string) {
    return await this.http.get<BlogPost[]>(`${serverAddress}/destinations/${destinationId}/posts`).toPromise();
  }

  async getPost(destinationId: string, name: string) {
    const post = await this.http.get<BlogPost>(`${serverAddress}/destinations/${destinationId}/posts/${name}`).toPromise();
    post.id = name;

    for (const paragraph of post.paragraphs) {
      if (paragraph.direction == null) {
        paragraph.direction = 'rtl';
      }
    }

    return post;
  }

  async updatePost(destinationId: string, post: BlogPost) {
    const authenticatedRequest = {
      authentication: {
        password: this.authenticationService.password
      },
      data: post
    };
    return await this.http.post(`${serverAddress}/destinations/${destinationId}/posts/${post.id}`,
      JSON.stringify(authenticatedRequest)).toPromise();
  }
}
