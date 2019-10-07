import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilsComponent } from './dils.component';

describe('DilsComponent', () => {
  let component: DilsComponent;
  let fixture: ComponentFixture<DilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
