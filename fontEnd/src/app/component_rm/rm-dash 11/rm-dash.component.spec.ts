import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmDashComponent } from './rm-dash.component';

describe('RmDashComponent', () => {
  let component: RmDashComponent;
  let fixture: ComponentFixture<RmDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
