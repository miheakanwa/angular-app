import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCentercontentComponent } from './employee-centercontent.component';

describe('EmployeeCentercontentComponent', () => {
  let component: EmployeeCentercontentComponent;
  let fixture: ComponentFixture<EmployeeCentercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCentercontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCentercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
