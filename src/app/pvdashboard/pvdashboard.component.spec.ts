import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdashboardComponent } from './pvdashboard.component';

describe('PvdashboardComponent', () => {
  let component: PvdashboardComponent;
  let fixture: ComponentFixture<PvdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
