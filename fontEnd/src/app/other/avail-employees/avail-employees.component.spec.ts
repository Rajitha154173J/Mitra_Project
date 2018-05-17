import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailEmployeesComponent } from './avail-employees.component';

describe('AvailEmployeesComponent', () => {
  let component: AvailEmployeesComponent;
  let fixture: ComponentFixture<AvailEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
