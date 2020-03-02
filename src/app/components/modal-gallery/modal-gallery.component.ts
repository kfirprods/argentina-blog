import { GalleryService } from './../../services/gallery.service';
import { Album } from './../../models/album.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss']
})
export class ModalGalleryComponent implements OnInit {
  albums: Album[] = new Array();

  constructor(private galleryService: GalleryService) {
  }

  async ngOnInit() {
    this.albums = await this.galleryService.getAlbums();
  }
}
