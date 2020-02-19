import { DestinationsService } from './../../services/destinations.service';
import { map } from 'rxjs/operators';
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
    private destinationsService: DestinationsService,
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

  async ngOnInit() {
    this.isLoadingData = true;
    this.cookieService.set('last-visit', `${Date.now()}`);

    const destinations = await this.destinationsService.getDestinations();
    this.destinations = destinations.sort((destination1, destination2) => {
      if (destination1.timeOfArrival < destination2.timeOfArrival) {
        return -1;
      } else {
        return 1;
      }
    });

    this.isLoadingData = false;
  }
}
