import { BlogPostsService } from './../services/blog-posts.service';
import { TripDataService } from './../services/trip-data.service';
import { CookieService } from 'ngx-cookie-service';
import { BlogPost } from '../models/blog-post.type';
import { Component, OnInit } from '@angular/core';

import { ActivityType } from '../components/current-activity/activity-type.enum';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-main-view-component',
  templateUrl: './main-view-component.html',
  styleUrls: ['./main-view-component.scss']
})
export class MainViewComponent {
  name = 'Angular';
}
