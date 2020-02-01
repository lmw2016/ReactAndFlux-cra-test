import React, {useState,useEffect} from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';
import { Link } from "react-router-dom";

function CoursesPage (){
   const [courses,setCourses]=useState([]);

   useEffect(()=>{
       getCourses().then(_courses=>setCourses(_courses)); //not getCourses.then !!
   },[])

        return (<>
        <h2>Courses</h2>
        <Link className="btn btn-primary" to="/course">
            Create Course
        </Link>
        <CourseList courses={courses} />
        </>
        )
    }


export default CoursesPage;