import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRmComponent } from './navbar-rm.component';

describe('NavbarRmComponent', () => {
  let component: NavbarRmComponent;
  let fixture: ComponentFixture<NavbarRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
