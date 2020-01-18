import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotBriefingFormComponent } from './pilot-briefing-form.component';

describe('PilotBriefingFormComponent', () => {
  let component: PilotBriefingFormComponent;
  let fixture: ComponentFixture<PilotBriefingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotBriefingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotBriefingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
