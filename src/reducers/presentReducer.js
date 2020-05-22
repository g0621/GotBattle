import {FETCH_ALL_BATTLE, FETCH_FILTERED_BATTLE} from "../actions/types";

const initialState = {
    allBattles: [],
    filteredBattles: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_ALL_BATTLE:
            return {
                ...state,
                allBattles: action.payload
            };
        case FETCH_FILTERED_BATTLE:
            return {
                ...state,
                filteredBattles: action.payload
            }
        default:
            return state
    }
}
