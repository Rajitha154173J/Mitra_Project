import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPmComponent } from './navbar-pm.component';

describe('NavbarPmComponent', () => {
  let component: NavbarPmComponent;
  let fixture: ComponentFixture<NavbarPmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
