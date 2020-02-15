import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogPost } from '../../models/blog-post.type';
import { Destination } from '../../models/destination.type';

@Component({
  selector: 'app-destinations-view',
  templateUrl: './destinations-view.component.html',
  styleUrls: ['./destinations-view.component.scss']
})
export class DestinationsViewComponent implements OnInit {
  destinations: Array<Destination>;
  isLoadingData: boolean;

  lastVisit: Date;
  unreadBlogPosts: Array<BlogPost>;

  private totalTripDays: number;

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.destinations = null;

    this.isLoadingData = true;

    if (this.cookieService.check('last-visit')) {
      this.lastVisit = new Date(+this.cookieService.get('last-visit'));
    } else {
      this.lastVisit = new Date(Date.now());
    }
  }

  changeCurrentDay(selectedDay: number) {
    this.router.navigate([`/days/${selectedDay}`]);
  }

  ngOnInit() {
    this.isLoadingData = true;

    this.db.collection<Destination>('/destinations').snapshotChanges()
      .pipe(map(changes => {
        return changes.map(change => {
          const destination = change.payload.doc.data() as Destination;
          destination.id = change.payload.doc.id;

          return destination;
        });
      }))
    .subscribe(destinations => {
      this.cookieService.set('last-visit', `${Date.now()}`);

      this.isLoadingData = false;
      this.destinations = destinations.sort((destination1, destination2) => {
        if (destination1.timeOfArrival.seconds < destination2.timeOfArrival.seconds) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }
}
