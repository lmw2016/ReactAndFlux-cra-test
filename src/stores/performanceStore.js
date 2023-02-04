import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _performances = [];

class PerformanceStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback); //not removeChangeListener
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getPerformances() {
        return _performances;
    }

    getPerformanceByflyNum(flyNum) {
        return _performances.find(p => p.mktCarrierFlyNum === flyNum);
    }

}

const store = new PerformanceStore();

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.LOAD_PERFORMANCES:
            _performances = action.performances;
            store.emitChange();
            break;
        default:
            //nothing to do
    }
})
export default store;