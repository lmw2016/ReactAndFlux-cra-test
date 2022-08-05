import React,{useState, useEffect } from 'react';
import CourseForm from './common/CourseForm'
import courseStore from '../stores/courseStore';
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";

const ManageCoursePage=props=>{
  const [errors, setErrors] = useState({});
  const [courses, setCourses] =useState(courseStore.getCourses())
  const [course, setCourse] = useState(
    { //array destructing
      Id: null,
      slug: "",
      title: "",
      authorId: null,
      category: ""
    }
  );
  
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0)
    { courseActions.loadCourses(); }
    else if  (slug) {
        setCourse(courseStore.getCourseBySlug(slug));
    }
   return () => courseStore.removeChangeListener(onChange);
  },[courses.length,props.match.params.slug]);
  
  function onChange() {
    setCourses(courseStore.getCourses());
  }

   function formIsValid(){
     const _errors={};
     if (!course.title) _errors.title="Title is required";
     if (!course.authorId) _errors.authorId="author id is required";
     if (!course.category) _errors.category="Category is required";

     setErrors(_errors);
     return Object.keys(_errors).length===0;
   }

   function handleSubmit(event){
     event.preventDefault();
     if(!formIsValid()) return;
     courseActions.saveCourse(course).then(()=>{
       props.history.push("/courses");
       toast.success('course saved!!')
     });
   }

  //  function handleTitleChange(event){
  //    const updatedCourse={...course,title:event.target.value};
  //    setCourse(updatedCourse);
  //  }

   function handleChange({target}){
    const updatedCourse={...course, 
      [target.name]:target.value};
    setCourse(updatedCourse);
  }

    return (
        <>
          <h2>Manage Course</h2>
          {/* <Prompt when="true" message="Are you sure you want leave?" /> */}
          {/* {props.match.params.slug} */}
          {/* <CourseForm course={course} onTitleChange={handleTitleChange} /> */}

          <CourseForm 
          errors={errors}
          course={course} 
          onChange={handleChange} 
          onSubmit={handleSubmit} />
        </>
    )
}

export default ManageCoursePage;