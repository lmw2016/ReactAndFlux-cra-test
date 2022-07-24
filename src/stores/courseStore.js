import { EventEmitter } from "events";
import dispatcher, { Dispatcher } from "../appDispatcher";
import actionType from '../actions/actionTypes';
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    
    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCourses() {
        return _courses;
    }

    getCourseBySlug(Slug) {
        return _courses.find(course => course.slug === Slug);
    }
}

const store = new CourseStore();

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            store.emitChange();
            break;
        default:
            //nothing to do
    }
})
export default store;