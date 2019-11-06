import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Employee } from '../../models/EmployeeModel';
import { STUDENT } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { FILTER_FORM, ACTIVE_PANNEL } from '../../../actions';
import { AppState } from '../../../store';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  employee: any;
  private subscription: Subscription = new Subscription()
  empList: Array<any>;
  empForm: FormGroup;
  students: Array<Employee> = STUDENT;
  stuDetails: any;
  showDetails: boolean = false;
  employeeForm: any;
  employees: any = [
                      { id: 1, name: "test" }, 
                      { id: 2, name: "test" }, 
                      { id: 3, name: "test" }
                    ];

  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private fb: FormBuilder, private router: Router,
              private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.createForm();
    this.route.data.subscribe(data => {
      this.employee = data['employee'];
     // console.log('Data :', data['employee']);
    });

    this.route.data.subscribe(data => {
      this.empList = data['empList'];
     // console.log('Data :', data['empList']);
    }
    );

    const sub1 = this.ngRedux.select(state => {
      return state.employee.formObj
    }).subscribe(result => {
      this.employeeForm = result;
    //  console.log(this.employeeForm);
    });
    this.subscription.add(sub1);
  }

  createForm1() {
    let i = 10;
    j = 100;
    if (i <= 10) {
      var j = 20;
      const a: number = 10;
    }
  }

  createForm() {
    this.empForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, this.checkValid, this.whiteSpaceValidator,this.hasNumber])],
      lastName: [null, Validators.compose([ this.whiteSpaceValidator])]
    }, {
        //validator: [this.checkValid]
      })
  }

  checkValid(control: FormControl) {
    if (control.value != null && control.value != null && control.value.length > 6) {
      return { 'lengthError': true }
    } else {
      return null;
    }
  }

  hasNumber(control: FormControl) {
    if (/\d/.test(control.value)) {
      return { 'hasNumber': true }
    } else {
      return null;
    }
  }

  whiteSpaceValidator(control: FormControl) {
    if(control.value && !control.value.trim()){
      return {'whiteSpaceValidator': true}
    } else {
      return null;
    }
  }

  noWhitespaceValidator(control: FormControl) {
    let value = control.value;
    if (value != null && value != undefined) {
      // console.log(value.toString());
      return null
    } else {
      return null;
    }
  }

  createNewStudent() {

    this.ngRedux.dispatch({ type: FILTER_FORM, formObj: this.empForm.getRawValue() });

  }
  //let i = this.establishmentInfo.addressDetails.findIndex(x=>(x.addressTypeCode=='3'))
  getStudentInfo(stuName) {

    if (Boolean(false)) {
      // console.log('1');
    }

    else
        console.log('2');
      this.showDetails = true
    // const index = this.students.filter(stu => {
    //   if (stu.name == stuName) {
    //     let s: any;
    //     s.push(stu);
    //     return s;
    //   }
    // })
    // .map(stu => stu.id);
   //  console.log(index);
     let stuIndex: Employee;
  //  
  stuIndex =this.students.find(s => s.name == stuName);
     console.log(stuIndex);
    let i = this.students.findIndex(stud => stud.name == stuName);
    //console.log(this.students[i]);
    let studentEmployees = [];
    this.employees.forEach(emp => {
      this.students.forEach(student => {
        if (emp.id == student.id) {
          studentEmployees.push(emp);
          studentEmployees.push(student);
        }
      })
    });
  }

  goToDetailPage(){
    this.studentService.getStudentDetails();
    this.router.navigate(['employee/emp-details/infoPanel']);
    this.ngRedux.dispatch({type:ACTIVE_PANNEL, activePanel:'infoPanel' });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
myName: string;
  getMyName(){
console.log(this.myName);
  }

}
