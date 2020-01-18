import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotBriefingComponent } from './pilot-briefing.component';

describe('PilotBriefingComponent', () => {
  let component: PilotBriefingComponent;
  let fixture: ComponentFixture<PilotBriefingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotBriefingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotBriefingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
