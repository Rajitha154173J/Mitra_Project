import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocEmpComponent } from './alloc-emp.component';

describe('AllocEmpComponent', () => {
  let component: AllocEmpComponent;
  let fixture: ComponentFixture<AllocEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
