import { Destination } from './../models/destination.type';
import { BlogPostsService } from './../services/blog-posts.service';
import { TripDataService } from './../services/trip-data.service';
import { CookieService } from 'ngx-cookie-service';
import { BlogPost } from '../models/blog-post.type';
import { Component, OnInit } from '@angular/core';

import { ActivityType } from '../components/current-activity/activity-type.enum';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

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
        private tripDataService: TripDataService,
        private blogPostsService: BlogPostsService,
        private activatedRoute: ActivatedRoute,
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
        /*this.blogPostsService.getBlogPosts().subscribe(posts => {
          this.blogPosts = posts.sort((post1, post2) => {
            if (post1.timestamp.seconds < post2.timestamp.seconds) {
              return -1;
            } else {
              return 1;
            }
          });

          const unreadBlogPosts = posts.filter(
            b => b.timestamp.toDate().getTime() > this.lastVisit.getTime()
          );

          if (unreadBlogPosts.length > 0) {
            this.snackbar.open(
              `נוספו ${unreadBlogPosts.length} פוסטים חדשים מאז הביקור האחרון שלך בימים: ` +
                `${unreadBlogPosts
                  .map(b => b.day)
                  .sort()
                  .filter((item, pos, ary) => !pos || item !== ary[pos - 1])
                  .join(', ')}`,
              null,
              { duration: 7500, direction: 'rtl' }
            );
          }
        });*/

        this.tripDataService.getDestinations().subscribe(destinations => {
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
