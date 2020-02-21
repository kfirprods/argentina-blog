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
    return await this.http.get<Destination[]>(`${serverAddress}/destinations`).toPromise();
  }

  async getDestination(destinationId: string) {
    return await this.http.get<Destination>(`${serverAddress}/destinations/${destinationId}`).toPromise();
  }
}
