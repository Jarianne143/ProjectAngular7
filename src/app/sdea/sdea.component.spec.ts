import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeaComponent } from './sdea.component';

describe('SdeaComponent', () => {
  let component: SdeaComponent;
  let fixture: ComponentFixture<SdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
