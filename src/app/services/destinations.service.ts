import { Destination } from './../models/destination.type';
import { serverAddress } from './consts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  constructor(private http: HttpClient) {
  }

  async getDestinations() {
    return await this.http.get<Destination[]>(`${serverAddress}/destinations`).toPromise();
  }

  async getDestination(destinationId: string) {
    return await this.http.get<Destination>(`${serverAddress}/destinations/${destinationId}`).toPromise();
  }
}
