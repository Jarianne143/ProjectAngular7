import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmpComponent } from './rmp.component';

describe('RmpComponent', () => {
  let component: RmpComponent;
  let fixture: ComponentFixture<RmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
