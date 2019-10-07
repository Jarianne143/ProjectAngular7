import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprComponent } from './apr.component';

describe('AprComponent', () => {
  let component: AprComponent;
  let fixture: ComponentFixture<AprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
