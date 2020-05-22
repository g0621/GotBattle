import {combineReducers} from "redux";
import autoCompleteReducer from "./autoCompleteReducer";
import presentReducer from "./presentReducer";


export default combineReducers({
    auto_complete_reducer : autoCompleteReducer,
    present_reducer : presentReducer
});
