import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as performanceApi from "../api/performanceApi";

 
export function loadPerformances() {
    return performanceApi.getPerformances().then(_performances => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_PERFORMANCES,
            performances: _performances
        });
    });
}