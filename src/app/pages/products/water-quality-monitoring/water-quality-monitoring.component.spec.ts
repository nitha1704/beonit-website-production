import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterQualityMonitoringComponent } from './water-quality-monitoring.component';

describe('WaterQualityMonitoringComponent', () => {
  let component: WaterQualityMonitoringComponent;
  let fixture: ComponentFixture<WaterQualityMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterQualityMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterQualityMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
