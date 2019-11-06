import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
import { SEARCH_RESULTS, PAGE_LOAD, LANDING_SEARCH_RESULTS } from '../app/actions';
import { AppState } from '../app/store';

@Injectable()
export class AppServiceService {
  private subscription: Subscription = new Subscription
  searchResults: Array<any>;
  constructor(private http: Http,
    private ngRedux: NgRedux<AppState>
  ) {

    const sub = this.ngRedux.select(state => {
      return state.landing.searchResults;
    }).subscribe(result => {
      this.searchResults = result;
     // console.log(this.searchResults);
    })

    this.subscription.add(sub);
  }
  loadResults() {
    this.ngRedux.dispatch({ type: PAGE_LOAD, pageLoad: true })
    //change URL to working URL.
    this.http.get("http://dummy.restapiexample.com/student/getStudentById").subscribe(status => {

      this.ngRedux.dispatch({ type: LANDING_SEARCH_RESULTS, searchResults: status.json() });
    //  console.log(status.json());
      this.ngRedux.dispatch({ type: PAGE_LOAD, pageLoad: false })
    }, err => {
     // console.log('URL Failed');
      this.ngRedux.dispatch({ type: PAGE_LOAD, pageLoad: false })
    })
  }
  // deleteAct() {
  //   this.ngRedux.dispatch({type:PAGE_LOAD, loading: true});
  //   this.caService.getDeleteInfo(this.caActivityModel.caNum).subscribe(result => 
  //     {
  //      this.deleteInfo = result;
  //    //  console.log(this.deleteInfo);
  //      this.ngRedux.dispatch({type:PAGE_LOAD, loading: false});
  //      this.deleteClicked();
  //   });
   
  // }
  loadAllRres() {
    this.http.get('').map(result =>{
      result.json()
    }, err=>{

    }
    
    
    )
  }
}
