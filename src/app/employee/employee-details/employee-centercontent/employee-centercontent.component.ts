import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store';
import { NgRedux } from '@angular-redux/store';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-centercontent',
  templateUrl: './employee-centercontent.component.html',
  styleUrls: ['./employee-centercontent.component.scss']
})
export class EmployeeCentercontentComponent implements OnInit {

  empDetails: any;
  activePanel: string='infoPanel';
  accPanels: any = [
    { id: 'infoPanel', 
      title: 'Emp Info Panel' 
    },
    { id: 'contactPanel', 
      title: 'Emp Contact Panel' 
    }
  ]
  constructor(private ngRedux: NgRedux<AppState>, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.router.url);
    this.ngRedux.select(state => {
      return state.employee.detailFormObj
    }).subscribe(data => {
      this.empDetails = data;
     // console.log(this.empDetails);
    })
    this.ngRedux.select(state => {
      return state.employee.activePanel
    }).subscribe(data => {
     
      this.activePanel = data;
    //   console.log(this.activePanel);
    });
  }

  beforeChange(event){
      this.router.navigate(['employee/emp-details/'+event.panelId]);
  }
  getDetailsInfo(panelinfo){
    this.activePanel = panelinfo;
    this.router.navigate(['employee/emp-details/'+panelinfo]);
  }

}
