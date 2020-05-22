import {FETCH_ALL_PLACES_START_WITH, FETCH_ALL_PLACES, EMPTY_FILTERED_LOCATIONS, SET_SELECTED_LOCATION} from "./types";
import {getAllLocations, getLocationsStartWith} from "../fetchActions";


export const fetchAllPlaces = () => dispatch => {
    getAllLocations().then(res => dispatch({
        payload: res,
        type: FETCH_ALL_PLACES
    })).catch(err => console.log(err));
}

export const fetchPlacesStartWith = (initials) => dispatch => {
    if (initials.length === 0) {
        dispatch({payload: [], type: FETCH_ALL_PLACES_START_WITH})
    } else {
        getLocationsStartWith(initials)
            .then(res => dispatch({
                payload: res,
                type: FETCH_ALL_PLACES_START_WITH
            }))
    }
}

export const emptyFilteredLocations = () => dispatch => {
    dispatch({
        payload : [],
        type : EMPTY_FILTERED_LOCATIONS
    })
}

export const setSelectedLocation = (location) => dispatch => {
    dispatch({
        payload : location,
        type: SET_SELECTED_LOCATION
    })
}
