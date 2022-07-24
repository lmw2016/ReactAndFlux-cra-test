import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as courseApi from "../api/courseApi";

export function saveCourse(course) {
    courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            course: saveCourse
        });
    });
}