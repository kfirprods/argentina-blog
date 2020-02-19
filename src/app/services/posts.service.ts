import { BlogPost } from 'src/app/models/blog-post.type';
import { map } from 'rxjs/operators';
import { serverAddress } from './consts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  async getPosts(destinationId: string) {
    const postNames = await this.http.get<string[]>(`${serverAddress}/destinations/${destinationId}/posts`).toPromise();
    const posts = new Array<BlogPost>();

    for (const postId of postNames) {
      const post = await this.getPost(destinationId, postId);
      post.id = postId;
      posts.push(post);
    }

    return posts;
  }

  async getPost(destinationId: string, name: string) {
    return await this.http.get<BlogPost>(`${serverAddress}/destinations/${destinationId}/posts/${name}`).toPromise();
  }
}
