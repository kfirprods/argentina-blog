import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timestamp-presenter',
  templateUrl: './timestamp-presenter.component.html',
  styleUrls: ['./timestamp-presenter.component.scss']
})
export class TimestampPresenterComponent implements OnInit {
  @Input()
  timestamp: Date;

  timespanDescription: string;

  constructor() { }

  ngOnInit() {
    const diff = (new Date().getTime() - this.timestamp.getTime()) / 1000;
    const hourDifference = Math.floor(diff / (60 * 60));
    const daysDifference = Math.floor(diff / (60 * 60 * 24));

    if (diff < 10 * 60) {
      this.timespanDescription = 'כמה דקות';
    } else if (diff < 60 * 60) {
      this.timespanDescription = 'בשעה האחרונה';
    } else if (diff < 24 * 60 * 60) {
      if (hourDifference === 1) {
        this.timespanDescription = 'שעה';
      } else if (hourDifference === 2) {
        this.timespanDescription = 'שעתיים';
      } else {
      this.timespanDescription = '' + hourDifference + ' שעות';
      }
    } else {
      if (daysDifference === 1) {
        this.timespanDescription = 'אתמול';
      } else if (daysDifference === 2) {
        this.timespanDescription = 'שלשום';
      } else {
        this.timespanDescription = '' + daysDifference + ' ימים';
      }
    }
  }
}
