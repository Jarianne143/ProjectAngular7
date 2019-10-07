import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavListComponent } from './main-nav-list.component';

describe('MainNavListComponent', () => {
  let component: MainNavListComponent;
  let fixture: ComponentFixture<MainNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
