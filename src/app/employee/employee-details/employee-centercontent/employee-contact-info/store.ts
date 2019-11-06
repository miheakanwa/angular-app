
import { tassign } from 'tassign';
import { EmployeeContact } from '../../../models/EmpAddressModel';
import { UPDATE_ADDRESS_LIST } from '../../../../actions';


export interface EmployeeAddressState {
   
    addressList: Array<EmployeeContact>
}

export const EMPLOYEE_ADDRESS_INITIAL_STATE:  EmployeeAddressState = {
    addressList: [],
    
    
}

function empFilter(state: EmployeeAddressState, action){
    var newState = state;
    newState.addressList = action.addressList
    console.log(newState.addressList);
    return tassign(state, newState);
}



 export function EmployeeAddressReducer(state: EmployeeAddressState = EMPLOYEE_ADDRESS_INITIAL_STATE, action): EmployeeAddressState {
    switch(action.type){
         case UPDATE_ADDRESS_LIST : return empFilter(state, action);
     }
     return state;
 }