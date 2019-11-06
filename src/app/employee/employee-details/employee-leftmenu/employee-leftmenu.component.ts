import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../../store';
import { NgRedux } from '@angular-redux/store';
import { ACTIVE_PANNEL } from '../../../actions';

@Component({
  selector: 'app-employee-leftmenu',
  templateUrl: './employee-leftmenu.component.html',
  styleUrls: ['./employee-leftmenu.component.scss']
})
export class EmployeeLeftmenuComponent implements OnInit {

  constructor(private router: Router, private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  getDetailsInfo(panelinfo){
    this.ngRedux.dispatch({type: ACTIVE_PANNEL, activePanel:panelinfo});
   // this.router.navigate(['employee/emp-details/'+panelinfo]);
  }
}
