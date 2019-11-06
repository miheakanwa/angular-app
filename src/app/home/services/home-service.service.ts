import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store';
import { GET_ALL_STATES, PAGE_LOAD } from '../../actions';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
//AppState - landing, appLanding()
  constructor(private http: Http, private ngRedux: NgRedux<AppState>) { }

  getAllStates(){
    this.ngRedux.dispatch({type: PAGE_LOAD, pageLoad: true})
  this.http.get('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json')
  .subscribe(result => {

    this.ngRedux.dispatch({type: PAGE_LOAD, pageLoad: false});
    
   this.ngRedux.dispatch({type: GET_ALL_STATES, allStates: result.json()})

  }, err => {

    this.ngRedux.dispatch({type: PAGE_LOAD, pageLoad: false});

  })
  }
}
