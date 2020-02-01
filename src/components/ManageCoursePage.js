import React,{useState} from 'react';
import CourseForm from './common/CourseForm'
import CoursesPage from './CoursesPage';
// import { Prompt } from "react-router-dom";

const ManageCoursePage=props=>{

   const [course,setCourse]=useState({ //array destructing
     Id:null,
     slug:"",
     title:"",
     authorId:null,
     category:""
   })

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

          <CourseForm course={course} onChange={handleChange} />
        </>
    )
}

export default ManageCoursePage;