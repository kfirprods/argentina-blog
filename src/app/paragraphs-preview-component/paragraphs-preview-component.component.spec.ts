import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphsPreviewComponentComponent } from './paragraphs-preview-component.component';

describe('ParagraphsPreviewComponentComponent', () => {
  let component: ParagraphsPreviewComponentComponent;
  let fixture: ComponentFixture<ParagraphsPreviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphsPreviewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphsPreviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
