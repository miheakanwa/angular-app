
import { tassign } from 'tassign';
import { FILTER_FORM, DETAIL_DB_DATA, FORM_DATA, ACTIVE_PANNEL } from '../actions';

export interface EmployeeAppState {
    formObj: any;
    dbObj: any;
    detailFormObj: any;
    activePanel: string;
}

export const EMPLOYEE_INITIAL_STATE:  EmployeeAppState = {
    formObj: [],
    dbObj: null,
    detailFormObj: null,
    activePanel: 'infoPanel',
    
}

function empFilter(state: EmployeeAppState, action){
    var newState = state;
    newState.formObj = action.formObj
    return tassign(state, newState);
}
function detailDbObj(state: EmployeeAppState, action){
    var newState = state;
    newState.dbObj = action.dbObj
   console.log(newState.dbObj);
    return tassign(state, newState);
}
function formObj(state: EmployeeAppState, action){
    var newState = state;
    newState.detailFormObj = action.detailFormObj
    
    return tassign(state, newState);
}

function activePannel(state: EmployeeAppState, action){
    var newState = state;
    newState.activePanel = action.activePanel
    console.log(newState.activePanel);
    return tassign(state, newState);
}


 export function EmployeeReducer(state: EmployeeAppState = EMPLOYEE_INITIAL_STATE, action): EmployeeAppState {
    switch(action.type){
         case FILTER_FORM: return empFilter(state, action);
         case DETAIL_DB_DATA: return detailDbObj(state, action);
         case FORM_DATA: return formObj(state, action);
         case ACTIVE_PANNEL: return activePannel(state, action);
     }
     return state;
 }