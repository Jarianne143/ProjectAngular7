import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetygovernanceComponent } from './safetygovernance.component';

describe('SafetygovernanceComponent', () => {
  let component: SafetygovernanceComponent;
  let fixture: ComponentFixture<SafetygovernanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetygovernanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetygovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
