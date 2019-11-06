import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store';
import { DETAIL_DB_DATA, FORM_DATA } from '../../actions';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: Http,
  private ngRedux: NgRedux<AppState>) { }
  getStudentDetails() {
    this.http.get('../../../assets/data/data.json').subscribe(data =>{
   //   console.log(data.json());
      this.ngRedux.dispatch({ type: DETAIL_DB_DATA, dbObj: data.json() });
      this.ngRedux.dispatch({ type: FORM_DATA, detailFormObj: data.json() });
    })
  }
}
