import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsurComponent } from './dsur.component';

describe('DsurComponent', () => {
  let component: DsurComponent;
  let fixture: ComponentFixture<DsurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
