import { faCheckCircle, faAnchor, faClock } from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from './../../services/loading.service';
import { DestinationsService } from './../../services/destinations.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  lastVisit: Date;
  unreadBlogPosts: Array<BlogPost>;

  now: Date;

  faCheckCircle = faCheckCircle;
  faArrowCircleDown = faAnchor;
  faClock = faClock;

  constructor(
    private destinationsService: DestinationsService,
    private router: Router,
    private cookieService: CookieService,
    private loadingService: LoadingService
  ) {
    this.destinations = null;

    if (this.cookieService.check('last-visit')) {
      this.lastVisit = new Date(+this.cookieService.get('last-visit'));
    } else {
      this.lastVisit = new Date(Date.now());
    }

    this.now = new Date();
  }

  changeCurrentDay(selectedDay: number) {
    this.router.navigate([`/days/${selectedDay}`]);
  }

  async ngOnInit() {
    this.loadingService.changeIsLoading(true);
    this.cookieService.set('last-visit', `${Date.now()}`);

    const destinations = await this.destinationsService.getDestinations();
    this.destinations = destinations.sort((destination1, destination2) => {
      if (destination1.timeOfArrival < destination2.timeOfArrival) {
        return -1;
      } else {
        return 1;
      }
    });

    this.loadingService.changeIsLoading(false);

    setTimeout(() => {
      for (const destination of this.destinations) {
        if (this.now > destination.timeOfArrival && this.now < destination.timeOfDeparture) {
          const destinationToScrollTo = document.getElementById(destination.id);

          if (destinationToScrollTo) {
            const elementRect = destinationToScrollTo.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const absoluteElementCenter = absoluteElementTop + elementRect.height / 2;
            const middle = absoluteElementCenter - (window.innerHeight / 2);
            window.scrollTo({top: middle, behavior: 'smooth'});
          }
          break;
        }
      }
    }, 100);
  }
}
