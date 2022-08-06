import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


function CourseList(props){
   return (
    <table className="table">
    <thead>
               <tr>
                   <th>&nbsp;</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
        {props.courses.map(course=>{
            return (
                <tr key={course.id}>
                    <th><button className='btn btn-outline-danger' onClick={() => {
                        props.deleteCourse(course.id);
                        toast.success(course.slug + ' deleted!');
                    }}>Delete</button></th>
                <th><Link to={"/course/"+course.slug}>{course.title}</Link></th>
                <th>{course.authorId}</th>
                <th>{course.category}</th>
            </tr>
            )
        })}
    </tbody>
</table>
   )
}

// CourseList.propType={
//     courses:PropTypes.array.isRequired  //only checked in dev
// };

CourseList.propType = {
    deleteCourse: PropTypes.func.isRequired,
    courses:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            authorId:PropTypes.number.isRequired,
            category:PropTypes.string.isRequired,
        })
    ).isRequired  
};

CourseList.defaultProps={
    courses:[]
}

export default CourseList;