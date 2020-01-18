import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotBriefingReportComponent } from './pilot-briefing-report.component';

describe('PilotBriefingReportComponent', () => {
  let component: PilotBriefingReportComponent;
  let fixture: ComponentFixture<PilotBriefingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotBriefingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotBriefingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
