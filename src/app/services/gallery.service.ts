import { Album } from './../models/album.type';
import { serverAddress } from './consts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {
  }

  async getAlbums() {
    return await this.http.get<Album[]>(`${serverAddress}/gallery`).toPromise();
  }
}
