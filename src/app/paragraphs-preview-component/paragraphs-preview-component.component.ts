import { Paragraph } from './../models/paragraph.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraphs-preview-component',
  templateUrl: './paragraphs-preview-component.component.html',
  styleUrls: ['./paragraphs-preview-component.component.scss']
})
export class ParagraphsPreviewComponentComponent implements OnInit {
  @Input() paragraphs: Array<Paragraph>;

  previewText: string;

  constructor() { }

  ngOnInit() {
    this.previewText = '';

    for (const paragraph of this.paragraphs) {
      this.previewText += paragraph.text;

      if (this.previewText.split(' ').length > 12) {
        break;
      } else {
        this.previewText += ' ';
      }
    }

    this.previewText += '...';
  }
}
