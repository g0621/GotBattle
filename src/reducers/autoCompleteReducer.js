import {
    FETCH_ALL_PLACES_START_WITH,
    FETCH_ALL_PLACES,
    EMPTY_FILTERED_LOCATIONS,
    SET_SELECTED_LOCATION
} from "../actions/types";

const initialState = {
    allLocations : [],
    filteredLocation : [],
    selectedLocation : ''
}
export default (state = initialState,action) => {
    switch (action.type) {
        case  FETCH_ALL_PLACES_START_WITH:
            return {
                ...state,
                filteredLocation : action.payload
            };
        case FETCH_ALL_PLACES:
            return {
                ...state,
                allLocations : action.payload
            };
        case EMPTY_FILTERED_LOCATIONS:
            return {
                ...state,
                filteredLocation: action.payload
            };
        case SET_SELECTED_LOCATION:
            return {
                ...state,
                selectedLocation: action.payload
            }
        default:
            return state
    }
}
