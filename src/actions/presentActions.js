import {FETCH_ALL_BATTLE,FETCH_FILTERED_BATTLE} from "./types";
import {getAllBattle,getBattleByLocation} from "../fetchActions";


export const fetchAllBattle = () => dispatch => {
    getAllBattle().then(res => dispatch({
        payload : res,
        type : FETCH_ALL_BATTLE
    })).catch(err => console.log(err));
}

export const fetchBattleByPlace = (location) => dispatch => {
    getBattleByLocation(location).then(res => dispatch({
        payload : res,
        type: FETCH_FILTERED_BATTLE
    })).catch(err => console.log(err));
}

