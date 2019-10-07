import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityandcomplianceComponent } from './qualityandcompliance.component';

describe('QualityandcomplianceComponent', () => {
  let component: QualityandcomplianceComponent;
  let fixture: ComponentFixture<QualityandcomplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityandcomplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityandcomplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
