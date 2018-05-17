import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringRequestListComponent } from './hiring-request-list.component';

describe('HiringRequestListComponent', () => {
  let component: HiringRequestListComponent;
  let fixture: ComponentFixture<HiringRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
