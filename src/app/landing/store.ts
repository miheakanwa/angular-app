//We can completly ignore this store.
import { LANDING_SEARCH_RESULTS, PAGE_LOAD } from '../actions';

import { tassign } from 'tassign';

export interface AppLandingPage {

    pageLoad: boolean;

}

export const APPLANDING_INITIAL_STATE: AppLandingPage = {

    pageLoad: false,

}

// export function appLandingReducer(state: AppLandingPage = APPLANDING_INITIAL_STATE, action): AppLandingPage: {
// switch(action.type){

// }
//     return state;
// }

function pageLoad(state, action) {

    var newState = state;
    
    newState.pageLoad = action.pageLoad;
    
    return tassign(state, action);

}

export function ApplandingReducer(state: AppLandingPage = APPLANDING_INITIAL_STATE, action): AppLandingPage {

    switch(action.type){

        case PAGE_LOAD: return pageLoad(state, action);

    }
    
    return state;

}