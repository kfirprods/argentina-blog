import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.type';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private destinations: Observable<Destination[]>;

  constructor(private db: AngularFirestore) {
    this.destinations = db.collection<Destination>('/destinations').valueChanges();
  }

  getDestinations() {
    return this.destinations;
  }
}
