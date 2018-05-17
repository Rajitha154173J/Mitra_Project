import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjectListComponent } from './assign-project-list.component';

describe('AssignProjectListComponent', () => {
  let component: AssignProjectListComponent;
  let fixture: ComponentFixture<AssignProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
