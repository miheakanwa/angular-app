
import { LANDING_SEARCH_RESULTS, GET_ALL_STATES } from '../actions';
import { tassign } from 'tassign';

export interface LandingAppState {
    searchResults: Array<any>;
    allStates: Array<any>;
}

export const LANDING_INITIAL_STATE:  LandingAppState = {
    searchResults: [],
    allStates:[]
}

function landingSearchResults(state: LandingAppState, action){
    var newState = state;
    newState.searchResults = action.searchResults
    return tassign(state, newState);
}


function loadAllStates(state: LandingAppState, action){
    var newState = state;
    newState.allStates = action.allStates
    return tassign(state, newState);
}
 export function landingReducer(state: LandingAppState = LANDING_INITIAL_STATE, action): LandingAppState {
    switch(action.type){
         case LANDING_SEARCH_RESULTS: return landingSearchResults(state, action);
         case GET_ALL_STATES : return loadAllStates(state, action);
     }
     return state;
 }