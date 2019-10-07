import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasrComponent } from './sasr.component';

describe('SasrComponent', () => {
  let component: SasrComponent;
  let fixture: ComponentFixture<SasrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
