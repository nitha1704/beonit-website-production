import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchbtnComponent } from './get-in-touchbtn.component';

describe('GetInTouchbtnComponent', () => {
  let component: GetInTouchbtnComponent;
  let fixture: ComponentFixture<GetInTouchbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInTouchbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
