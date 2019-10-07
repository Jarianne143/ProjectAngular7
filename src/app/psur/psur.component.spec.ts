import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsurComponent } from './psur.component';

describe('PsurComponent', () => {
  let component: PsurComponent;
  let fixture: ComponentFixture<PsurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
