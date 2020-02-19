import { PostsService } from './posts.service';
import { Destination } from './../models/destination.type';
import { map } from 'rxjs/operators';
import { serverAddress } from './consts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { calculateArraySum } from 'src/utils';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  constructor(private http: HttpClient, private postsService: PostsService) {
  }

  async getDestinations() {
    const destinationIds = await this.http.get<string[]>(`${serverAddress}/destinations`).toPromise();
    const destinations = new Array<Destination>();

    for (const destinationId of destinationIds) {
      const destination = await this.getDestination(destinationId);
      destination.id = destinationId;

      const allPosts = await this.postsService.getPosts(destination.id);
      destination.postsCount = allPosts.length;
      destination.photosCount = calculateArraySum(allPosts.map(post => post.gallery.length));
      destinations.push(destination);
    }

    return destinations;
  }

  async getDestination(destinationId: string) {
    return await this.http.get<Destination>(`${serverAddress}/destinations/${destinationId}`).toPromise();
  }
}
