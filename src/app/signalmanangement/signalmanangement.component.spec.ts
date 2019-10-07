import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalmanangementComponent } from './signalmanangement.component';

describe('SignalmanangementComponent', () => {
  let component: SignalmanangementComponent;
  let fixture: ComponentFixture<SignalmanangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalmanangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalmanangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
