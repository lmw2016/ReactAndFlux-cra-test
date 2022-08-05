import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as courseApi from "../api/courseApi";

export function saveCourse(course) {
   return courseApi.saveCourse(course).then(savedCourse => {  //cause error w/o return
        dispatcher.dispatch({
            actionType: course.id
                ? actionTypes.UPDATE_COURSE
                : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export function loadCourses() {
    return courseApi.getCourses().then(_courses => {  
         dispatcher.dispatch({
             actionType: actionTypes.LOAD_COURSES,
             courses: _courses
         });
     });
 }