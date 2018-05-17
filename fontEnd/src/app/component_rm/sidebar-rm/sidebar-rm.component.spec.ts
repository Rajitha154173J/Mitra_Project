import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRmComponent } from './sidebar-rm.component';

describe('SidebarRmComponent', () => {
  let component: SidebarRmComponent;
  let fixture: ComponentFixture<SidebarRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
