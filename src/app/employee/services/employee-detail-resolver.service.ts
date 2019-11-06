import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store';
import { DETAIL_DB_DATA, FORM_DATA } from '../../actions';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailResolverService implements Resolve<any> {
  constructor(private http: Http, private ngRedux: NgRedux<AppState>) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   // console.log('Emp Details API called');
    this.http.get('../../../assets/data/data.json').subscribe(data => {
      this.ngRedux.dispatch({ type: DETAIL_DB_DATA, dbObj: data.json() });
      this.ngRedux.dispatch({ type: FORM_DATA, detailFormObj: data.json() });
 //     console.log(data.json());
    }, err => {
 //     console.log('Emp Details API call failed');
    })
   }

}
