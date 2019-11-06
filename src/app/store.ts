
import {  TOGGLE_TODO, 
          REMOVE_TODO, 
          REMOVE_ALL_TODOS, 
          SEARCH_RESULTS, 
          PAGE_LOAD } from './actions';
import { tassign } from 'tassign';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LandingAppState, 
         LANDING_INITIAL_STATE, 
         landingReducer } from './home/store'
import { combineReducers } from 'redux';
import { AppLandingPage, 
         APPLANDING_INITIAL_STATE, 
         ApplandingReducer } from '../app/landing/store';
import { EmployeeAppState, 
         EMPLOYEE_INITIAL_STATE, 
         EmployeeReducer } from './employee/store';
import { EmployeeAddressState, 
          EMPLOYEE_ADDRESS_INITIAL_STATE, 
          EmployeeAddressReducer } from './employee/employee-details/employee-centercontent/employee-contact-info/store';
//this is for the feature module 


export interface AppState {

   landing: LandingAppState;

   appLanding: AppLandingPage;

   employee: EmployeeAppState;

   empAddress: EmployeeAddressState;
 

}


export const INITIAL_STATE: AppState = {

  landing: LANDING_INITIAL_STATE,

  appLanding: APPLANDING_INITIAL_STATE,

  employee: EMPLOYEE_INITIAL_STATE,

  empAddress: EMPLOYEE_ADDRESS_INITIAL_STATE

  
 
  
}




export const rootReducer = combineReducers({

    landing: landingReducer,

    appLanding: ApplandingReducer,

    employee: EmployeeReducer,

    empAddress: EmployeeAddressReducer,

})
