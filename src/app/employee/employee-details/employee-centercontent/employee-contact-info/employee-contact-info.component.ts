import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../../../store';
import { Employee } from '../../../models/Employee';
import { EmployeeContact } from '../../../models/EmpAddressModel';
import { FormGroup } from '@angular/forms';
import { UPDATE_ADDRESS_LIST } from '../../../../actions';
import { tassign } from 'tassign';

@Component({
  selector: 'app-employee-contact-info',
  templateUrl: './employee-contact-info.component.html',
  styleUrls: ['./employee-contact-info.component.scss']
})
export class EmployeeContactInfoComponent implements OnInit, OnDestroy {

  empForm: FormGroup;
  editRow: number;
  empDetails: Employee;
  edit: boolean = false;
  empAddress: Array<EmployeeContact>;
  editMode: boolean = false;

  constructor(private fb: FormBuilder,
              private ngRedux: NgRedux<AppState>) {

               }

  ngOnInit() {
    this.createForm();
    this.ngRedux.select(state => {
      return state.employee.dbObj;
    }).subscribe(result => {
     // this.empDetails = JSON.parse(JSON.stringify(result));
      this.empDetails = tassign(this.empDetails, result);
      this.empAddress = this.empDetails.address;
      const control = (<FormArray>this.empForm.get('addressForm'));
      if (this.empAddress) {
        this.empAddress.forEach(x => {
          control.push(this.loadForm(this.getAddressForm(), x));
        })
      }
    })
  }

  loadForm(form, address: EmployeeContact) {
    form.patchValue({
      streetAdress: address.streetAdress,
      city: address.city
    })
    return form;
  }

  ngOnDestroy(): void {
    // console.log('COntact COmponent Destroyed');
  }

  createForm() {
    this.empForm = this.fb.group({
      addressForm: this.fb.array([])
    })
  }

  getAddressForm() {
    return this.fb.group({
      streetAdress: [],
      city: []
    })
  }

  addNewAddress() {
    const control: FormArray = <FormArray>this.empForm.controls['addressForm'];
    control.push(this.getAddressForm());
    this.edit = true;
    this.editRow = control.length - 1;
  }

  save(index) {
    const control: FormArray = <FormArray>this.empForm.controls['addressForm'];
    this.edit = false;
    let empCt: EmployeeContact;
    empCt = control.at(index).value;
    if (this.editMode) {
      this.empAddress.splice(index, 1, empCt);
      this.editMode = false;
    }
    else {

      this.empAddress.push(empCt);

    }
    this.ngRedux.dispatch({ type: UPDATE_ADDRESS_LIST, addressList: this.empAddress });

  }

  deleteAddress(index: number) {
    const control: FormArray = <FormArray>this.empForm.controls['addressForm'];
    control.removeAt(index);
    this.empAddress.splice(index, 1);
    this.ngRedux.dispatch({ type: UPDATE_ADDRESS_LIST, addressList: this.empAddress });
  }

  editAddress(index) {
    this.editRow = index;
    this.edit = true;
    this.editMode = true;
    const control: FormArray = <FormArray>this.empForm.controls['addressForm'];
  }

  cancel(i) {
   if(this.editMode) {
    this.editMode = false;
    this.edit = false;
   } else {
    const control: FormArray = <FormArray>this.empForm.controls['addressForm'];
   control.removeAt(i);
   }

  }

}
