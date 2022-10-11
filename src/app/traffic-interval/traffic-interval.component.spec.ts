import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficIntervalComponent } from './traffic-interval.component';

describe('TrafficInterval15Component', () => {
  let component: TrafficIntervalComponent;
  let fixture: ComponentFixture<TrafficIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficIntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
