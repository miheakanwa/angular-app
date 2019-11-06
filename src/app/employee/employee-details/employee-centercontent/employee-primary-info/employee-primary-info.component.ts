import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../../../store';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-primary-info',
  templateUrl: './employee-primary-info.component.html',
  styleUrls: ['./employee-primary-info.component.scss']
})
export class EmployeePrimaryInfoComponent implements OnInit, OnDestroy {
  employeeDetails: any;
  empDetailsForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,
              private ngRedux: NgRedux<AppState> ){

  }
  ngOnInit() {
    this.createForm();
   // console.log('component created');
   this.ngRedux.select(state => {
      return state.employee.dbObj
    }).subscribe(result => {
      this.employeeDetails = result;
   //   console.log(this.employeeDetails);
      if(this.employeeDetails){
       this.patchValues(this.employeeDetails);
      }
    });
  this.ngRedux.select(
    state => {
      return state.employee.formObj;
    }
  ).subscribe(result =>{
    this.employeeDetails = result;
  })
  }



  createForm(){
    this.empDetailsForm = this.fb.group({
      name: [],
      age: []
    })
  }

  patchValues(empDetails){
    this.empDetailsForm.patchValue({
      name: empDetails.name,
      age: empDetails.age
    });
  }

  editStudent(){
  //  console.log(this.empDetailsForm.getRawValue());
  }

  ngOnDestroy(): void {
   
  //  console.log('Info COmponent Destroyed');
  }

}
