import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/authorStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import loadAuthors from "../actions/authorActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    authorStore.addChangeListener(onAuthorChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    if (authorStore.getAuthors().length === 0) loadAuthors();
    return () => {
      courseStore.removeChangeListener(onChange);
      authorStore.removeChangeListener(onAuthorChange);
    };
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses()); //not getCourses.then !!
  }

  function onAuthorChange() {
    setAuthors(authorStore.getAuthors());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Create Course
      </Link>
      <CourseList
        courses={
          authors.length === 0
            ? []
            : courses.map((course) => {
                return {
                  ...course,
                  authorName: authors.find((a) => a.id === course.authorId)
                    .name,
                };
              })
        }
        deleteCourse={deleteCourse}
      />
    </>
  );
}

export default CoursesPage;
