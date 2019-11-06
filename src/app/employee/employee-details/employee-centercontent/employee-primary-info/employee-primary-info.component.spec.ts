import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePrimaryInfoComponent } from './employee-primary-info.component';

describe('EmployeePrimaryInfoComponent', () => {
  let component: EmployeePrimaryInfoComponent;
  let fixture: ComponentFixture<EmployeePrimaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePrimaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePrimaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
