import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeftmenuComponent } from './employee-leftmenu.component';

describe('EmployeeLeftmenuComponent', () => {
  let component: EmployeeLeftmenuComponent;
  let fixture: ComponentFixture<EmployeeLeftmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLeftmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeftmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
